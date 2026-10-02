#!/usr/bin/env node
// Read-only store discovery and metadata search. Teaching decisions remain with the agent.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const skillRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const emit = value => process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
const readJSON = file => JSON.parse(fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, ''));
const normalize = value => value.normalize('NFKC').trim().toLowerCase();
const milestones = new Set(['proposed', 'user-approved', 'artifact-reviewed', 'classroom-validated']);
const outcomes = new Set(['positive', 'negative', 'mixed', 'unknown']);

function inside(root, relative) {
  if (typeof relative !== 'string' || path.isAbsolute(relative)) throw new Error('Case file must be relative to the store');
  const target = path.resolve(root, relative);
  const within = (base, candidate) => {
    const rel = path.relative(base, candidate);
    return rel !== '..' && !rel.startsWith(`..${path.sep}`) && !path.isAbsolute(rel);
  };
  if (!within(root, target)) throw new Error('Case file escapes the store');
  if (fs.existsSync(target) && !within(fs.realpathSync(root), fs.realpathSync(target))) {
    throw new Error('Case file link escapes the store');
  }
  return target;
}

function main() {
  const args = {};
  const allowed = new Set(['--root', '--project-dir', '--tags', '--limit', '--exclude']);
  for (let i = 2; i < process.argv.length; i += 2) {
    const key = process.argv[i];
    if (!allowed.has(key) || !process.argv[i + 1] || process.argv[i + 1].startsWith('--')) {
      throw new Error('Usage: experience.mjs [--root path] [--project-dir path] [--tags comma-separated] [--limit 1..10] [--exclude case-id]');
    }
    args[key] = process.argv[i + 1];
  }
  const limit = Number(args['--limit'] ?? 3);
  if (!Number.isInteger(limit) || limit < 1 || limit > 10) throw new Error('limit must be an integer from 1 to 10');
  const tags = new Set((args['--tags'] ?? '').split(',').map(normalize).filter(Boolean));
  const projectRoot = path.resolve(args['--project-dir'] ?? process.cwd());
  let root;
  let configuration = null;
  if (args['--root']) root = path.resolve(args['--root']);
  else {
    configuration = [path.join(projectRoot, '.buckmoon', 'experience.local.json'), path.join(skillRoot, 'experience.local.json')]
      .find(file => fs.existsSync(file)) ?? null;
    if (configuration) {
      const config = readJSON(configuration);
      if (config.schema_version !== 1 || typeof config.store_path !== 'string' || !config.store_path.trim()) {
        throw new Error(`Invalid store configuration: ${configuration}`);
      }
      root = path.resolve(path.dirname(configuration), config.store_path);
    } else root = path.join(os.homedir(), '.buckmoon', 'experience');
  }
  const indexFile = path.join(root, 'case-index.json');
  const preferenceFile = path.join(root, 'user-preferences.md');
  const base = { root, configuration, index_file: indexFile, preferences_file: fs.existsSync(preferenceFile) ? preferenceFile : null };
  if (!fs.existsSync(root)) {
    emit({ ...base, status: 'store-missing', cases: [] });
    return;
  }
  if (!fs.existsSync(indexFile)) {
    emit({ ...base, status: 'index-missing', cases: [], warning: 'Inspect the existing store; do not overwrite or reset it.' });
    return;
  }
  const index = readJSON(indexFile);
  if (index.schema_version !== 1 || !Array.isArray(index.cases)) throw new Error('Unsupported or invalid case index');
  const seen = new Set();
  const warnings = [];
  const candidates = [];
  for (const item of index.cases) {
    if (typeof item.id !== 'string' || !/^[a-z0-9][a-z0-9-]*$/.test(item.id) || seen.has(item.id)) {
      throw new Error('Invalid or duplicate case ID');
    }
    seen.add(item.id);
    if (!milestones.has(item.status) || !outcomes.has(item.outcome) || !item.match) throw new Error(`Invalid case metadata: ${item.id}`);
    if (![item.title, item.summary, item.updated].every(value => typeof value === 'string' && value.trim())) throw new Error(`Missing case description: ${item.id}`);
    let score = 0;
    const matched = [];
    for (const [field, weight] of [['gaps', 4], ['actions', 3], ['decisions', 2], ['topics', 1]]) {
      if (!Array.isArray(item.match[field]) || !item.match[field].every(tag => typeof tag === 'string')) throw new Error(`Invalid tags: ${item.id}/${field}`);
      for (const tag of new Set(item.match[field].map(normalize))) {
        if (tags.has(tag)) { score += weight; matched.push(`${field}:${tag}`); }
      }
    }
    const file = inside(root, item.file);
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
      warnings.push(`Missing case file: ${item.id}`);
      continue;
    }
    if (item.id === args['--exclude'] || (tags.size && !score)) continue;
    candidates.push({ id: item.id, title: item.title, summary: item.summary, file, status: item.status, outcome: item.outcome, score, matched_tags: matched });
  }
  candidates.sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
  emit({ ...base, status: candidates.length ? 'ok' : 'no-match', total_cases: index.cases.length, warnings, cases: candidates.slice(0, limit) });
}

try { main(); }
catch (error) { emit({ status: 'error', message: error.message }); process.exitCode = 1; }
