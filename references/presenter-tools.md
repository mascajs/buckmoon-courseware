# Optional presenter capabilities for HTML decks

Use this reference only when the approved deliverables include presenter controls, live text editing, a separate teacher view, or export of an edited HTML copy. A classroom HTML deck does not need all of these features by default.

Implement the selected capabilities against the current deck's own structure. Do not force a previous project's selectors, dimensions, keyboard shortcuts, or storage scheme onto a new deck.

## Capability choices

Choose only the capabilities the user needs:

- **Presentation navigation** — previous, next, reveal, restart, and optional fullscreen.
- **Teacher view** — notes, expected responses, misconceptions, and timing in a separate window or separate teacher file.
- **Live copy editing** — editable student text with undo, reset, and an explicit save/export action.
- **Asset adjustment** — replace or reposition an image only when classroom use genuinely needs it.
- **Motion control** — pause, reduce, replay, or jump to a stable final state.

Document the selected controls in the project record. Do not add a toolbar merely because the starter bundle contains one.

## Information separation

- A student-only file contains no teacher notes, answer rationale, timing cue, or hidden presenter panel.
- If teacher notes are requested, keep them in a separate teacher file or display them only in a separate presenter window.
- Presenter controls must not occupy the main lesson composition or appear in print/export unless requested.
- Edit mode must expose only approved student-facing text. Never expose formulas, interaction state, source paths, hidden answers, or layout code as editable content.

## Integration contract

Create a small adapter between the deck and the chosen presenter capabilities. The adapter should identify:

- the stage and scene collection;
- the current scene and reveal state;
- navigation and render functions;
- editable text selectors;
- note identifiers that remain stable when slides are reordered;
- the configured stage size and responsive scale.

Do not depend on identifiers or functions copied from a previous case. If the starter assets assume different names or dimensions, change the adapter or the assets in the private build rather than reshaping the lesson deck around them.

## Editing and storage

- Keep edit mode off during normal presentation.
- Suspend navigation shortcuts while focus is inside editable content or form controls.
- Scope browser storage to a stable deck identifier so unrelated decks cannot share edits accidentally.
- Explain that browser storage belongs to one browser and device.
- When portability matters, provide an explicit action that exports a self-contained edited file.
- Preserve pending text edits before another tool rebuilds or replaces part of the page.
- Prefer recoverable hide/show behavior to deletion.

Keyboard shortcuts are project choices. Use `event.code` when shortcuts must work across input methods, avoid conflicts with browser and assistive-technology commands, and always provide a visible or documented alternative.

## Teacher notes

Derive notes from the approved detailed lesson script. A note entry may include:

- scene identity and reveal step;
- ready-to-say narration;
- expected responses and a no-response prompt;
- common misunderstanding and reply;
- timing or classroom caution.

Keep the notes and script synchronized. Empty fields should stay empty rather than being filled with boilerplate.

## QA

Verify only the capabilities included in the build, plus the separation rules:

- navigation and back behavior follow the reveal contract;
- fullscreen or responsive scaling preserves the full stage;
- the teacher view follows scene and reveal changes without exposing notes on the projected page;
- editing, undo, reset, persistence, and export work after reload when included;
- hidden slides or parts behave predictably and remain recoverable;
- controls are hidden from print and do not overlap student content;
- the student file contains no teacher-only text or answer state;
- typing in editable fields does not trigger presentation shortcuts.
