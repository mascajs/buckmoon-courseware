# Visual, layout, and motion selection library

Use this library after the lesson purpose and student-facing content are stable. It contains options, not a BuckMoon house style. Select the smallest set of patterns that serves the current lesson and record why they were chosen.

## 1. Separate the design dimensions

Do not compress every visual decision into a single style label. Decide these dimensions independently:

- **Tone** — restrained, playful, editorial, technical, documentary, hand-drawn, cinematic, or another project-specific tone.
- **Finish** — rough sketch, mixed-media, clean diagram, or polished graphic system.
- **Information density** — simple, moderate, or detailed.
- **Visual grammar** — photograph, illustration, chart, diagram, map, typographic composition, physical-paper metaphor, or mixed media.
- **Motion level** — static, progressive reveal, state change, or interactive exploration.

A serious lesson can use hand-drawn explanation without becoming childish; a polished deck can still use generous whitespace; an interactive deck does not need animation on every scene.

When no design reference is supplied, propose two or three genuinely different directions before building a sampler. Vary composition, visual grammar, finish, and motion—not merely the accent color. A low-risk direction, a more expressive direction, and an optional wildcard are useful when those choices fit the user; the labels themselves are not mandatory.

## 2. Establish one system for the current project

### Color

- Choose one leading color, one supporting tone, and a small accent set unless the supplied identity requires more.
- Keep semantic color mappings stable within the deck. The same color should not mean “risk” on one scene and “success” on another.
- Pair color with labels, position, line style, or shape so meaning does not depend on color alone.
- Use dark/light shifts to mark chapter changes or pauses only when the sequence benefits from that rhythm.

### Typography

- Make title, explanation, evidence label, annotation, and source visibly different roles.
- Use the supplied font consistently when it supports Korean readability. A display face may need a quieter companion for long text.
- Reduce copy, change composition, or choose a denser layout before shrinking essential student text.
- Avoid stacking multiple kickers, subtitles, labels, and footer fragments that repeat the same information.

### Motif

- Choose at most one recurring signature: a line language, crop shape, paper edge, coordinate grid, marker stroke, photographic treatment, or similar device.
- Vary the motif with the scene instead of stamping the identical decoration everywhere.
- Do not carry the motif into another project unless the new reference and content independently support it.

### Images and illustrations

- Define the slot and aspect ratio before sourcing or generating the image.
- Crop decorative imagery assertively, but fit evidence-bearing diagrams, screenshots, and charts so no meaning is lost.
- Keep titles, page numbers, citations, and precise chart labels as editable deck text rather than baking them into generated images.
- When using a recurring character or drawing style, preserve a stable anchor such as silhouette, line weight, face, or palette while changing pose and emotion to fit the content.
- Treat empty space as part of the composition. A small subject in a large field can be intentional when it directs attention.

## 3. Choose a layout family by teaching intent

Use the scene's rhetorical job, not its object count, to select a family.

| Teaching intent | Useful composition | Watch for |
|---|---|---|
| Open or state a claim | one dominant phrase or image with a secondary cue | decorative slogans that say less than the lesson |
| Explain one concept | central model with short annotations around it | an oversized title competing with the model |
| Show evidence and interpretation | roughly 70/30 evidence-to-commentary split; direct labels | a chart treated as background decoration |
| Compare | aligned fields, opposing anchors, shared baseline, or controlled overlap | automatic equal cards when the sides are not equal |
| Show a process or causal chain | path, lanes, steps, or progressive assembly | arrows that imply a relationship not supported by content |
| Reveal layers or clues | stacked elements or the same scene in successive states | exposing the answer before the intended step |
| Examine an image or source | large evidence field with crop, callout, or magnified detail | cropping away context students need |
| Show a timeline, map, or system | one spatial field with a clear reading route | turning teacher timing into a student-facing timeline |
| Highlight a number or result | one big number tied to its unit, source, and comparison | a number without scale or meaning |
| Run an activity | short action prompt plus the material students manipulate or record | teacher instructions, rubrics, and timing crowding the canvas |
| Pause or transition | open space, tonal shift, single question, or section marker | using the same transition scene in every project |

Asymmetry often creates stronger focus than a default 50/50 split. Use overlap, adjacency, isolation, edge bleed, and empty space to show relationships. These are meaning-making tools, not decoration.

## 4. Build rhythm across the deck

- Vary dense and open scenes, near and far views, explanation and activity, and—when suitable—dark and light scenes.
- Avoid repeating the same composition on consecutive scenes unless the repetition is deliberately supporting comparison or a reveal sequence.
- Keep repeated instructional roles recognizable. Quiz choices, data labels, activity prompts, and citations may share rules without sharing the whole layout.
- Use section dividers or vertical drill-down structures only when they clarify hierarchy.
- Inspect the montage. If every scene begins at the same point, uses the same card grid, or has the same occupied area, revise the sequence before polishing individual slides.

## 5. Use a motion grammar, not an effects menu

Choose motion according to what students should notice:

- **Reveal** — disclose a clue, label, answer, or annotation in teaching order.
- **Assemble** — build a system one actor, relationship, or layer at a time.
- **Transform** — show one state becoming another while preserving object identity.
- **Compare or replace** — hold a frame stable while one condition changes.
- **Trace** — draw a path, causal route, timeline, or flow in reading order.
- **Focus** — crop, zoom, dim, or spotlight a meaningful part of existing evidence.
- **Simulate** — let a parameter or choice change the visible outcome.

Motion rules:

- One advance should produce one meaningful teaching change.
- Establish a stable opening state and a stable final state.
- Back navigation reverses the current reveal before leaving the scene.
- Avoid decorative looping, constant floating, or fade-only motion that communicates no change.
- The content must remain complete and understandable when motion is reduced, unavailable, or exported to a static format.
- Honor reduced-motion preferences by default. A presenter-controlled override may be offered only when requested and when a static fallback remains available.
- Keep static transforms separate from animated transforms so objects do not jump when animation starts.
- Validate the start, an informative middle frame, and the settled state. Test one representative motion before applying it across the deck.

### Format-specific expression

- In HTML, use progressive states, stacked layers, direct manipulation, or stateful charts. Keep keyboard and visible-control behavior equivalent.
- Keep interactive targets comfortably selectable on touch or trackpad, expose focus visibly, and never hide an essential action behind hover alone.
- In PPTX, use editable builds, Morph-compatible duplicate slides, or simple entrance/emphasis effects. Provide a non-animated reading path when export or compatibility may remove effects.
- When one format cannot reproduce an effect faithfully, preserve the teaching sequence rather than imitating the exact animation.

## 6. Match visual form to content

- Use an infographic when the learner needs a compact overview of several facts or relationships.
- Use a diagram when sequence, cause, structure, or dependency is the lesson.
- Use a mind map only when hierarchy and branching are the point, not as a generic summary.
- Use a hand-drawn or whiteboard treatment when construction, annotation, or approachability matters.
- Use photographs or source images when authenticity, place, person, or close reading matters.
- Use charts when quantity, comparison, distribution, or change is supported by real data. Label units and scales directly.
- Use multi-frame progressive builds when the final system would be too dense to understand at once.

## 7. Reference and template handling

Before borrowing a layout, classify the reference:

- **Template** — preserve its system and map content to the closest narrative archetype.
- **Inspiration** — extract principles such as type contrast, image treatment, spacing, or composition; do not clone the page.
- **Content source** — use its facts or evidence, not its styling.
- **Asset source** — reuse only the permitted image, icon, font, or palette.

For every media placeholder, decide `keep`, `replace`, or `delete`. Match exemplars by narrative role, density, evidence type, and orientation. If content does not fit, switch archetype or edit the copy instead of compressing it into the wrong layout.

## 8. Common failures

- every scene is a rounded card grid or dashboard;
- decorative graphs, unlabelled curves, or invented data imply evidence;
- the same footer, page rail, wave, or connector becomes a cross-project signature;
- abstract copy such as “something spreads” replaces the actual subject and action;
- a large title collides with the main visual or forces the body below the safe area;
- low-opacity shapes add clutter without meaning;
- generated images contain titles, page numbers, dense labels, or source text;
- motion reveals the answer early, advances unpredictably, loops forever, or disappears without a fallback;
- body text is repeatedly shrunk to rescue an unsuitable composition.

## 9. Design decision record

Record the following before full production:

- audience and viewing conditions;
- dominant tone and finish;
- typography and color roles;
- selected layout families and sequence rhythm;
- recurring motif and where it is intentionally absent;
- image or illustration treatment;
- motion grammar and static fallback;
- what this project deliberately does differently from recent projects.

## 10. Visual QA

- Render every slide or scene and create a montage.
- Compare the output with the approved references and sampler.
- Verify all reveal states, motion-off states, and static exports.
- Check text/visual gaps, overflow, crop, contrast, alignment, and direct chart labels.
- Confirm that each non-text element explains, evidences, or directs attention; remove filler.
- Confirm that teacher notes and production metadata never leaked into the student canvas.

## Source cues synthesized into this library

The principles above are adapted, not copied, from the local presentation, Google Slides, Figma Slides, motion, visualization, and hand-drawn presentation skills, together with these public skill collections:

- [Visual Explainer Skill](https://github.com/ericblue/visual-explainer-skill) — separate style, detail, complexity, and progressive-frame decisions.
- [Reveal.js Skill](https://github.com/ryanbbrown/revealjs-skill) — fragments, stacked states, drill-down structure, and presentation rhythm.
- [Cook AI PPT Skill](https://github.com/cookaihq/ppt-skill) — coherent design systems, layout families, asset slots, and validation discipline.
- [AgentBuff Presentation Skills](https://github.com/nugrahalabib/AgentBuff-Presentation-Skills) — style exploration and single-file HTML presentation patterns.

Use these as principle sources only. Do not copy code, templates, or branded visual assets without checking their licenses and the user's permission.
