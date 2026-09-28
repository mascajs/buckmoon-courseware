# BuckMoon Courseware

BuckMoon Courseware is a Codex skill for turning lesson plans, content notes, design references, and existing classroom materials into detailed teaching scripts, coherent PowerPoint or HTML lesson decks, and activity worksheets.

It is an orchestration skill rather than a fixed slide theme. The same workflow can produce PowerPoint or interactive HTML while allowing each project to use a different visual system.

## What it helps with

- interprets a lesson plan instead of copying it directly onto slides;
- separates student-facing content, speaker notes, and production metadata;
- prepares a detailed teaching script and synchronized deck outline;
- creates activity worksheets from the confirmed classroom flow;
- adapts supplied fonts, palettes, templates, and design references;
- selects layouts and motion according to the teaching purpose;
- checks rendered slides, interactions, reveal states, and static fallbacks;
- keeps public deliverables free of numbered candidate versions.

## Skill structure

```text
buckmoon-courseware/
├── SKILL.md
└── references/
    ├── collaboration-contract.md
    ├── script-outline-workflow.md
    ├── worksheet-workflow.md
    ├── visual-layout-motion-library.md
    ├── html-student-deck-qa.md
    └── presenter-tools.md
```

`SKILL.md` contains the shared workflow and routes to the relevant reference only when that part of the task is needed.

## Installation

Place this repository in your Codex skills directory so that `SKILL.md` is located at:

```text
~/.codex/skills/buckmoon-courseware/SKILL.md
```

On Windows, the default location is usually:

```text
%USERPROFILE%\.codex\skills\buckmoon-courseware\SKILL.md
```

Restart or refresh Codex after installation if the skill does not appear immediately.

## Typical use

Ask Codex to use BuckMoon Courseware and provide any materials already available, such as:

- lesson plan or content notes;
- audience, class duration, and learning objective;
- design Markdown, reference deck, palette, font, or brand material;
- required output format: HTML, PPTX, worksheet, or a combination;
- an existing deck or worksheet that should be revised.

The default workflow is collaborative. It inspects the inputs, asks only questions that would materially change the result, confirms the content and visual direction at an appropriate checkpoint, and then builds and verifies the requested artifacts.

## Design principle

BuckMoon does not reuse a permanent visual signature. The design reference separates tone, finish, density, visual grammar, layout family, and motion so each lesson can choose an appropriate combination while remaining consistent inside one project.

## Requirements

- Codex with support for local skills;
- the built-in presentation skill when producing PPTX;
- an available browser or HTML toolchain when producing interactive HTML;
- `humanize-text` is recommended for natural Korean student copy and teacher narration.

External fonts, images, templates, and generated media remain subject to their own licenses and usage permissions.

## License

MIT
