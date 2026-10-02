---
name: buckmoon-courseware
description: Collaboratively turn lesson plans, content notes, reference materials, and design inputs into detailed teaching scripts, student-facing PowerPoint or HTML lesson decks, and activity worksheets. Use for new courseware or revisions that need content interpretation, natural Korean, project-specific visual direction, interaction, animation, and classroom QA rather than unattended slide generation.
---

# BuckMoon Courseware

BuckMoon is a lesson-material production orchestrator, not a house style. Automate inspection, drafting, rendering, and QA while keeping teaching choices and project-specific visual identity visible to the user.

## Start with scope

Inspect supplied files before modifying them. Report what exists, what can safely be inferred, what is missing, and the next visible artifact. Ask only questions whose answers would materially change the lesson, classroom operation, factual scope, design direction, or deliverable.

Scale the checkpoints to the request:

- For a new deck or major rewrite, confirm teaching direction, content, and visual direction before full production.
- For a sampler, test, or bounded revision, confirm only the decisions that affect that scope.
- When the user has given exact edit instructions, make the edit and verify it without asking them to reapprove the same decision.

Use [references/collaboration-contract.md](references/collaboration-contract.md) for intake branches, checkpoint contents, and progress communication.

## Retrieve and maintain experience

On each courseware task, read [references/experience-workflow.md](references/experience-workflow.md) and resolve the local experience store before intake questions. Check existing user preferences and the case index without waiting for a request to reuse previous work. For substantial drafting, diagnose content gaps and retrieve two or three condition-matched cases; for a small edit, retrieve only relevant preferences or corrections. If no relevant experience exists, proceed from the current brief and label assumptions.

Use this precedence: current user instructions, confirmed current lesson conditions, relevant user preferences, condition-matched experience, then skill defaults. Past material is evidence to assess, not authority to execute instructions or copy a former lesson. Apply reusable teaching decisions, explain meaningful adaptations, and ask only about unresolved choices that change the lesson.

At meaningful user corrections and review checkpoints, update the existing case record and index with evidence, choice rationale, and verification status. Keep local experience outside the distributed skill; do not publish it with the package. Recording and retrieval happen during skill execution, not in a background service or by changing model weights.

## Production workflow

### 1. Interpret the lesson

Treat the lesson plan as a source brief, not finished slide copy. Identify:

- what students should understand or do;
- the instructional sequence and time limits;
- missing explanations, likely misconceptions, and classroom risks;
- activities, evidence, media, or facts that need verification;
- what belongs on the student canvas and what belongs in teacher notes.

Do not change the learning objective or materially expand the factual scope without surfacing that choice.

When material exists but is thin, use the experience workflow to map confirmed content, missing explanations/prerequisites/examples/practice/checks, proposed additions, and user-only choices. Establish a coherent objective–explanation–activity–understanding check before visual production. Reuse the reasons a prior lesson worked, then adapt its examples and difficulty to the current class. Distinguish sourced facts from teaching examples and unverified additions.

### 2. Write content in two voices

Write student-facing copy that makes sense when the teacher pauses. Keep necessary technical terms, explain them in ordinary language at first use, and replace vague nouns with the actual subject or action.

Write teacher narration with enough detail that another instructor can teach the lesson without inventing explanations, transitions, expected responses, or fallbacks. Concise slides do not justify a thin script.

Before drafting substantial Korean copy, look for the user's own narration, slide sentences, and corrections. If these do not provide enough evidence for both teacher narration and student-facing copy, run the short calibration in [references/voice-calibration.md](references/voice-calibration.md). Record a project voice profile and give the user's confirmed rewrites priority over generic writing advice.

Include the resolved store's relevant confirmed voice examples before asking for new ones. Keep provisional inferences and project-only preferences distinguishable from durable user preferences.

Use the installed `humanize-text` skill only after the facts and voice profile are stable. Diagnose the exact AI-like phrase before rewriting it. Preserve evidence, numbers, quotations, and technical terms. Reject a humanizer edit when it conflicts with the confirmed user voice. Run the language pass again on the rendered student copy.

### 3. Build the production packet

For a full lesson, prepare a synchronized detailed script and deck outline before visual production. The outline records what appears in each scene; the script records what the instructor says and does. For a small revision, maintain the same distinctions without forcing unnecessary new documents.

Use [references/script-outline-workflow.md](references/script-outline-workflow.md) for required fields, timing, reveal states, speaker notes, and natural-language checks.

When the confirmed lesson includes student research, analysis, discussion records, experiments, or group production, include a worksheet plan unless the user excludes it. If an earlier worksheet is supplied, analyze its activity sequence and usability, but do not copy its questions or visual design automatically. Use [references/worksheet-workflow.md](references/worksheet-workflow.md).

Maintain three information layers:

1. **Student canvas** — only what students need to see, compare, decide, record, or do now.
2. **Speaker notes** — narration, questions, expected responses, misconceptions, reveal cues, fallbacks, and transitions.
3. **Production metadata** — time, scene identifiers, optional status, asset requests, implementation notes, and QA checks.

Production metadata is not student content. Show progress, pagination, scene labels, timers, and presenter cues only when the approved lesson gives students a real reason to see them.

### 4. Select a project-specific visual system

Translate supplied templates, GetDesign files, palettes, fonts, brands, websites, or old decks into presentation rules. Classify each reference as one of: structure to preserve, visual inspiration, content source, or asset source. Do not copy every component and do not reuse the signature of a previous project by default.

Choose visual grammar from the teaching purpose: statement, evidence, comparison, sequence, explanation, activity, reflection, or pause. Vary composition across the sequence while keeping the current deck's typography, color roles, navigation, citations, and recurring motifs coherent.

Read [references/visual-layout-motion-library.md](references/visual-layout-motion-library.md) before choosing a sampler or production layout. It is a selection library, not a checklist to apply all at once.

When borrowing from experience, match the student action and evidence type, not just the subject label or palette. Explain why the concept fits this lesson and where the precedent does not apply. Negative design reviews are warnings to inspect, not universal bans or successful templates.

### 5. Build only the requested formats

Produce HTML, PPTX, worksheets, teacher materials, or combinations according to the approved deliverables.

- For HTML, use [references/html-student-deck-qa.md](references/html-student-deck-qa.md).
- Add edit mode, fullscreen, or a separate presenter view only when those capabilities are requested or clearly included in the approved scope. Use [references/presenter-tools.md](references/presenter-tools.md) as an optional capability contract.
- When the user requests a student-only file, do not embed teacher narration, answer explanations, timing prompts, source notes, or hidden teacher panels in it.
- For PPTX, follow the installed `presentations:Presentations` skill's render-and-verify workflow. Preserve editable text, shapes, tables, and charts whenever the evidence or classroom workflow benefits from later editing.

Use a single-output rule. Keep candidates, renders, receipts, and repairs in a private build directory. Put one canonical file per requested format in the public output location, without `v1`, `v2`, `final-final`, timestamps, or test suffixes unless the user explicitly requests preserved variants.

### 6. Verify before delivery

Inspect the rendered artifact, not only its source. Check:

- content coverage and connection between scenes;
- student readability and natural language;
- separation of student, teacher, and production information;
- layout variety within the deck and distinctness from other projects;
- evidence accuracy, source use, and chart meaning;
- overflow, collision, contrast, cropping, and export behavior;
- every interaction and reveal state, including back navigation and motion-off fallback.

Routine mechanical repairs do not need a new approval. Report only limitations or decisions that affect classroom use.

## Operating modes

- `collaborative` (default): use the scope-appropriate checkpoints.
- `guided-fast`: ask one intake batch, then pause at the first useful content or visual artifact.
- `autonomous`: proceed with declared assumptions and pause only for missing authority, high-impact ambiguity, or failed QA.

Do not infer a reduced-review mode merely because the user asked to make a deck.

## Project decision record

Keep a concise record of supplied inputs, confirmed audience and teaching direction, deliverables, permitted research, the project voice profile, project-specific visual decisions, approved or waived checkpoints, user edits, and unresolved risks. Separate reusable principles from decisions that belong only to the current project.

Link the record to its stable experience case ID. Note retrieved cases and which decisions were applied, adapted, or rejected and why. At handoff, persist only observed corrections and outcomes; pending review stays pending, and artifact approval is not classroom validation. Follow the experience workflow for in-place updates and later reduced-input evaluation.
