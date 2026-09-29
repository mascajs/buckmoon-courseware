# Script and deck outline workflow

Use this reference after the user confirms the lesson direction and before visual design begins.

## Required outputs

For a full lesson-production packet, create two Markdown files in the case folder: a detailed lesson script and a deck outline. For a small revision or sampler, preserve the same information layers in the existing project documents instead of creating empty or redundant files.

### Detailed lesson script

Include:

- a short header only: audience, duration, the lesson's character, the central question, and student outputs;
- a minute-by-minute flow whose total matches the confirmed class time;
- the words the teacher can actually say aloud;
- what students see and do;
- likely student responses and a short follow-up when no one answers;
- common misunderstandings and the sentence used to correct them;
- a fallback for internet, file, or device failure when the activity depends on technology;
- a clear handoff from one activity to the next;
- labels for `core`, `optional`, and `early-finisher extension` activities;
- sources or fact checks that belong in speaker notes.

#### Keep the script to the lesson itself

The script is what the instructor says and does in the room, from the first scene to the last. Leave out everything else:

- a legend explaining the script's markers (`[화면]`, `교사 팁`, and similar labels explain themselves);
- expression rules or cautions listed up front (write them into the scene where they matter);
- teacher preparation checklists, materials lists, and room setup;
- student device or account checks;
- suggested group roles;
- production notes such as output format or how to rebuild the deck in PPT.

If the user needs preparation material, keep it in the decision record or a separate checklist, and only when asked. In-class fallbacks, such as what to do when the internet drops during an activity, belong in the script because the instructor uses them while teaching.

The script is a classroom-operating document, not a summary of the lesson. Write it so an instructor who did not help plan the class can teach directly from it.

For every teacher-led segment, include as needed:

- the exact opening sentence and the reason students are doing the activity;
- ready-to-say narration rather than directions such as `핵심 개념을 설명한다`;
- screen or reveal cues placed beside the sentence that triggers them;
- approximate pauses or reveal intervals when timing matters;
- the question students hear, likely answers, and a short rescue prompt when no one answers;
- what to say when a student answers early, gives only part of the answer, or gives a common wrong answer;
- a teacher tip that explains the teaching intent, not just the button to click;
- a spoken bridge into the next scene or activity;
- a clearly marked shorter route for time pressure without deleting the core explanation.

Write generously enough that the instructor can cut lines while teaching. Do not force the instructor to invent missing context, examples, or transitions. A concise student slide does not justify a concise teacher script.

Use natural spoken Korean. A useful segment often alternates among short narration, a question, a pause, a likely response, and a follow-up. It should sound plausible when read aloud, not like a report or essay.

#### Minimum quality test

Before delivery, check each timed segment:

1. Could another instructor begin this section without asking what to say first?
2. Are the important explanations written out, not summarized as an action?
3. If students stay silent, does the instructor have a usable next sentence?
4. Does the section end with a spoken transition?
5. Is there enough material for the allotted time, with optional lines clearly distinguished from core lines?

If any answer is no, the script is not finished.

#### Weak and acceptable patterns

Weak:

> 자료를 보여 주고 학생들에게 특징을 찾게 한다.

Acceptable:

> 이 자료에서 먼저 눈에 띄는 점 하나만 찾아볼게요. 정답처럼 말하려고 하지 않아도 됩니다. 모양, 위치, 숫자처럼 화면에서 바로 확인할 수 있는 것부터 이야기해 보세요. 아무 말이 나오지 않으면 제가 한 부분을 짚어 드릴 테니, 그 앞뒤가 어떻게 다른지 봅시다.

Then record the actual reveal cues, response branches, explanation, teacher tip, and bridge to the next scene.

### PPT/HTML outline

For every scene or slide, use the following production schema. Do not collapse it to a title and one sentence.

#### A. Production metadata — never render on the student canvas

- scene number, lesson time, and `core` / `optional` / `early-finisher extension` status;
- the matching section of the detailed script;
- the question carried over from the previous scene;
- the one understanding this scene must establish;
- the question or need that leads into the next scene.

#### B. Student canvas — canonical visible content

- the exact student-facing title;
- every sentence, label, formula, question, and activity instruction that may appear;
- the visual or evidence type and the factual labels attached to it;
- what the student should look at, decide, say, write, or click;
- reveal, motion, or interaction states in order.

#### C. Speaker notes — complete teaching support

- the opening line and why the scene is being shown;
- the explanation the instructor can actually say;
- the question students hear and likely answers;
- the rescue prompt for silence or partial answers;
- the misconception to correct and the correction sentence;
- the exact spoken bridge into the next scene;
- the shorter route when time is tight;
- the source or fact-check note when relevant.

#### D. Implementation notes

- source or asset need;
- PPT fallback when HTML behavior cannot be reproduced cleanly;
- content or controls that must not be rendered on the student canvas;
- a QA condition for the initial and final state when the scene reveals an answer.

An HTML scene may contain several reveal states. Record those states instead of pretending each click is a separate content slide. Decide the player-control placement during the visual-direction checkpoint and keep that placement consistent throughout the deck.

The outline is allowed to be long. It must carry enough information for later production without reopening the lesson design or asking the instructor to supply missing explanations. Preserve the canonical student wording, reveal order, evidence or visual need, interaction, and a usable note plan. Map each scene to the matching timed section of the detailed script; when the note is essential to the teaching logic, write the actual line in the outline instead of referring vaguely to `개념 설명`.

Do not solve a request for “less clutter on slides” by deleting substance from the lesson script. Reduce the student canvas first. Keep the explanation in the teacher view.

### Student canvas and teacher view

- Put only student-facing titles, questions, evidence labels, and activity instructions on the student canvas.
- Keep teacher narration, timing cues, answer explanations, classroom-operation notes, and hidden controls out of the student canvas.
- In PPTX, place teacher material in speaker notes or a clearly separated teacher master. In HTML, place it in a teacher-only view or control area.
- A source may appear on the student canvas when students need it to judge the evidence or when the output requires visible citation. Otherwise keep it in notes or the teacher view.
- `teacher note`, `source need`, and `timing` fields in the outline are production metadata. Do not render them as student copy.
- Lesson time, scene number, slide count, page count, progress rail, production label, and core/optional status are production metadata by default. Do not place them at the top, bottom, or side of the lesson canvas merely because they exist in the outline.
- In student-only HTML, keep player controls outside the fixed lesson canvas or let them auto-hide at its edge. Controls must not resemble lesson content or reduce the available teaching area.

## Continuity and meaning checks

Run these checks before visual design:

1. What question or idea from the previous scene does this scene answer?
2. What new question, need, or task does it create for the next scene?
3. Can a substitute instructor explain why this scene exists by reading its notes?
4. Can a student understand every visible sentence without hearing a hidden teacher-only noun or premise?
5. Does the scene show concrete evidence, an explanation, or an action? A scene made only of a vague slogan fails.

If a scene fails, merge it with a neighboring scene, add the missing bridge, or replace the abstraction with a concrete example. Do not solve the problem by adding a decorative timeline, page rail, or navigation diagram.

## Synchronization checks

- Every core activity in the script has a matching scene in the outline.
- Optional questions and extension work never appear in the default timing.
- The two files use the same terms, formulas, data cautions, and closing activity timing.
- A student-facing sentence appears in one canonical form. Do not maintain slightly different versions across the two files.
- The total duration stays within the confirmed class time, including any setup, transition, presentation, submission, or reflection time the lesson actually uses.
## Human-language pass

Before drafting substantial Korean copy, apply the project voice profile from [voice-calibration.md](voice-calibration.md). Use `humanize-text` afterward when it is available. For Korean, load its common and Korean rule packs. The user's confirmed rewrites outrank the rule pack.

1. Draft from the approved lesson facts and the confirmed voice profile.
2. Check Korean sentence order, visible context, and whether an omitted subject or object is actually recoverable.
3. Diagnose exact phrases that sound translated, promotional, overly balanced, or machine-made.
4. Preserve useful traits from the user's own wording, including clause order, directness, ordinary verbs, and concrete classroom examples.
5. Edit only the diagnosed spans. Keep facts, names, dates, numbers, formulas, technical terms, and direct quotations unchanged.
6. Read student copy without teacher narration and read teacher narration aloud. Rewrite any standalone slide sentence that lacks its subject, action, or premise, and break any spoken sentence that the instructor cannot say in one breath.

Watch especially for:

- vague titles that announce a journey instead of naming the topic;
- English-like rhetorical order that delays the actual subject, task, or claim until the end;
- a standalone phrase whose missing subject, object, or premise is not visible on the slide;
- report-style noun phrases combined with casual spoken endings;
- repeated `A에서 B로`, `단순히 A가 아니라 B`, and tidy three-part slogans;
- abstract nouns such as `가능성`, `효율성`, and `확산성` where a verb would be clearer;
- perfect paragraph rhythm, repeated formal endings, and report-style transitions;
- a clever final line that adds no teaching value.

#### Teacher voice

Teacher lines should sound like a person talking to students, not like a report read aloud.

- Address the students (`여러분`) and speak with them: `~볼까요`, `~봅시다`, `~죠`.
- Mix endings on purpose. Use `~입니다` for definitions and answers, `~요` for explanation, and `~죠 / ~까요 / ~봅시다` for moving together. Do not let three sentences in a row end the same way.
- Join ideas the way people speak (`먼저 ~하고, 그다음 ~할 거예요`). Avoid stacks of short declarative sentences.
- Do not announce a point before making it: cut lines such as `여기서 조심할 점이 있습니다`, `이유가 있습니다`, or `~를 살펴보겠습니다`. Say the point directly.
- Read unfamiliar symbols and new terms aloud the first time they are spoken, once only. Later mentions refer back instead of repeating the reading.
- State the lesson's framing in the opening in plain words. For an interdisciplinary lesson, say which fields meet and why the connection matters for today's task.
- Match the user's confirmed narration samples in sentence order, register, and rhythm over these defaults. Do not reduce voice matching to copying preferred sentence endings.

Keep the script synchronized with the deck. When a hint, title, or answer changes on screen, update the spoken line too, so the teacher does not say aloud what the screen deliberately hides.

Student copy may be shorter than teacher narration. Keep required technical terms, then explain them in plain Korean at first use.

## Within-deck consistency and cross-project distinction

The outline should describe what the scene needs to show, not impose a reusable house layout.

- Choose the deck's title, citation, navigation, motif, and layout rules during the visual-direction checkpoint, then apply those rules consistently where they are relevant.
- Keep compositional variety inside the approved system and compare the overall visual fingerprint with recent projects before producing the sampler.
- Use [visual-layout-motion-library.md](visual-layout-motion-library.md) to select project-specific layout families and motion grammar; do not copy a previous project's signature by default.

## Approval point

For a full lesson, deliver the script and outline at the content checkpoint. Summarize only the decisions that affect classroom use, wording, timing, or the next visual phase. Wait for confirmation before visual production unless the user has waived that checkpoint or asked for a bounded revision.
