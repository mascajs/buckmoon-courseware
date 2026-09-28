# Student-facing HTML production and QA

Use this reference when BuckMoon produces an HTML deck for students to watch or operate in class.

## Student-only mode

If the user requests student-only output:

- render only titles, questions, evidence labels, explanations, and activity directions meant for students;
- omit teacher narration, tips, timing prompts, classroom-operation notes, private source notes, and answer rationales;
- do not hide teacher material in a notes panel, shortcut, metadata drawer, DOM template, or off-screen region;
- if teacher notes are also requested, create a separate teacher file or presenter view and give students only the stripped file;
- keep navigation and interaction controls unobtrusive but discoverable;
- treat lesson time, scene numbers, page counts, progress rails, core/optional labels, presenter cues, and rehearsal markers as production metadata;
- place controls outside the configured lesson stage when possible. If they share the viewport, auto-hide them and keep them outside the content grid.

## Optional edit mode

Add edit mode only when it is part of the approved deliverable. The optional presenter capability contract is in `presenter-tools.md`.

- Keep edit mode off during normal presentation.
- Make only approved student-facing text editable.
- Disable navigation shortcuts while focus is inside editable text or form controls.
- If browser storage is used, explain its device and browser limits.
- When portability matters, provide an explicit action that exports a self-contained edited copy.
- Hide editing controls in fullscreen and print output.

## Copy that can stand on its own

Every visible sentence must remain understandable when the teacher pauses.

- Name the actual subject and action instead of using placeholders such as `무언가`, `여러 가지`, `변화`, `요소`, or `패턴`.
- Keep necessary technical terms and explain each one in ordinary Korean on first use.
- Do not use a clever slogan where a direct explanation is needed.
- Shorten by removing repetition, not by removing the relationship students must understand.

Run `humanize-text` after the factual draft is stable. Diagnose the exact AI tell first. Preserve the user's directness, ordinary verbs, technical terms, facts, numbers, and quotations. After rendering, reread each line in its visual context and rewrite anything that becomes ambiguous without the teacher script.

## Stage and spatial safety

Choose the stage aspect ratio and reference dimensions from the requested display or source template. A fixed 16:9 stage is common, but its pixel dimensions are an implementation decision, not a BuckMoon rule. Record the configured stage size and scale all gap checks from it.

Reserve clear regions for the title, body copy, main visual, and controls. Scene labels exist only when they are student content. Deliberate full-bleed overlap is allowed when the approved design calls for it and contrast remains readable.

- Define a minimum title-to-visual gap appropriate to the configured stage and type scale. Use a larger gap for very large titles.
- Do not let text touch the edge of a chart, image, card, or color field. Near-touching is a layout failure.
- Fix collisions by moving or resizing the visual region, adjusting the composition, or rewriting copy. Shrink essential type only after those options fail.
- Keep essential content inside the stage and test responsive fit separately.

Use `getBoundingClientRect()` or an equivalent rendered-coordinate check for registered title, body, visual, navigation, and control regions. Check intersection and the declared minimum gaps; do not rely only on source CSS.

## Reveal and motion contract

Motion must reveal meaning or show a change.

- A question scene opens with the answer, name, or interpretation hidden.
- One advance produces one meaningful reveal or state change.
- Only the advance after the final reveal moves to the next scene.
- Back reverses the current reveal before moving to the previous scene.
- Verify keyboard and visible controls. Preserve the current scene and reveal in the URL when useful.
- Provide a stable final state and a non-animated reading path.
- Honor `prefers-reduced-motion` by default. If the user requests a presenter-controlled motion override, keep an accessible static fallback and make the control explicit.
- Test with motion enabled and reduced. Content, answers, and controls must remain available in both modes.

Do not treat CSS classes as proof that motion works. Capture the initial, informative middle, and final states; inspect computed opacity and geometry; and confirm that the screen actually changes as intended.

## Required QA evidence

Before delivery:

1. Render every scene at the configured stage size and at the target viewport.
2. Capture every reveal state for questions, comparisons, progressive diagrams, and answers.
3. Fail the build on overflow, intersection, or a gap smaller than the declared safety value between registered regions.
4. Confirm that visible copy contains no teacher tips, production metadata, or unexplained placeholders.
5. Confirm that no state before the answer step exposes the answer visually, semantically, or to assistive technology.
6. Produce a montage or equivalent overview for visual review.
7. Test navigation, back behavior, motion-reduced behavior, fullscreen or responsive fit, and static/print fallback when included.
