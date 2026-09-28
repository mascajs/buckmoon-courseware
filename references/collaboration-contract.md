# BuckMoon collaboration contract

## Principle

Automation should reduce repetitive production work without removing the user's teaching and design decisions. The agent may inspect, summarize, validate, calculate, render, and run QA automatically. It must surface choices that could change what students learn, how the class runs, or what the deck feels like.

## First response after file inspection

Use a compact intake receipt.

```text
받은 자료
- ...

현재 이해한 수업
- 대상 / 시간 / 주제 / 산출물

제가 자동으로 진행할 부분
- 파일 분석, 내용 구조화, 문장 초안, 렌더링 검사 등

확인이 필요한 부분
- 방향을 바꿀 수 있는 질문만 제시

다음 확인 지점
- 예: 내용 구성안 또는 3장 스타일 샘플
```

Do not simply say “I will proceed.” Tell the user what the next visible artifact will be and what will not yet be produced.

## Intake questions

Ask only questions whose answers would change the result. Infer answers from supplied files when possible, then ask the user to confirm the inference instead of making them repeat the document.

Typical high-impact questions:

- Who are the students, and what do they already know?
- What should students understand or be able to do by the end?
- Is the lesson mainly teacher explanation, student activity, discussion, or a mixture?
- What duration and number of sessions must the material support?
- Is the deliverable HTML, PPTX, or both?
- Is the deck for live classroom use, institutional submission, student self-study, or teacher training?
- May the agent research and add external facts or media, or must it use only supplied files?
- What tone should the class have, and what should the deck avoid?

Ask two to five questions at a time. Prefer one combined question when the user can answer naturally in a sentence. Do not turn the intake into a long form.

## Missing-input branches

### No lesson plan or content file

Ask whether the user wants to:

1. provide an existing plan,
2. build a plan together from a topic and constraints, or
3. let BuckMoon propose a provisional structure for review.

Do not generate a full class structure from the topic alone without identifying it as provisional.

### No design file or reference

Ask whether the user wants to:

1. provide a template, reference deck, palette, font, or GetDesign output,
2. choose among two or three short visual-direction descriptions proposed from the lesson content, or
3. use a neutral temporary direction for content testing only.

Do not silently use the design of a previous BuckMoon case.

### No font

Explain that a suitable system font can be used temporarily, or the user can provide a font. Confirm before treating a temporary font as the final identity.

### No output format

Ask whether the priority is interactive classroom delivery, editable institutional submission, or both. Explain briefly that HTML supports richer interaction while PPTX is easier to submit and edit in common office workflows.

### No permission for external research or media

Use supplied sources only. Ask before introducing web research, stock images, or generated imagery when those additions could change the factual or visual direction.

## Approval gates

Use these as decision checkpoints, not mandatory ceremony. A new deck or major rewrite normally uses all five. A sampler, small revision, or user-directed correction may combine or skip checkpoints that do not affect its scope. Never make the user reconfirm a decision they have already made. Record combined or waived checkpoints in the project record.

### Gate 1: scope and teaching direction

Show:

- understood audience and objective
- proposed lesson emphasis
- content that will be expanded, reduced, or moved to teacher notes
- intended output and approximate scope
- important assumptions

Wait for confirmation before major content development.

### Gate 2: content and language

Show:

- slide or section outline
- detailed teacher script for the confirmed lesson flow
- PPT/HTML production outline synchronized with the script
- representative student-facing wording
- difficult terms and how they will be explained
- core activities, optional branches, and extensions for students who finish early
- added content and its evidence needs
- timing or classroom-operation concerns

Run a human-language pass on slide titles, student copy, transition lines, and spoken narration. Preserve technical terms and evidence while removing stiff report language, empty slogans, and repeated AI sentence patterns.

Keep the student canvas separate from teacher material. The canvas contains only student-facing titles, questions, evidence labels, and activity instructions. Put teacher narration, timing cues, answer explanations, source notes, and classroom-operation guidance in speaker notes, a teacher master, or an HTML teacher view.

Wait for confirmation before visual production.

### Gate 3: visual direction and sampler

Before rendering, describe:

- the visual concept and why it fits this lesson
- typography and color roles
- main composition and motion language
- what will deliberately differ from previous cases

Then render a small sampler. Wait for approval before full production.

### Gate 4: full-deck review

Show the full montage or representative preview and list only decisions or problems that still need attention. Routine corrections such as overflow, alignment, or obvious contrast issues do not require permission.

### Gate 5: final output

Deliver the requested files with any classroom-use or compatibility limitations. Keep the decision record with the project so revisions do not restart the intake.

## Progress communication

At each phase boundary, state:

- what is complete,
- what changed from the last confirmed plan,
- what is being done next,
- whether user input is needed now or at the next gate.

If processing continues for a while, provide brief progress updates. Do not present internal implementation details unless they help the user make a decision.

## When the user asks for more automation

The user may waive individual gates or switch modes. Confirm the new stopping point in one sentence, for example:

> 내용 구성은 제가 정리해서 진행하고, 디자인 3장 샘플에서 한 번 확인받겠습니다.

Even in autonomous mode, disclose the assumptions that affect teaching direction, factual scope, visual identity, research permission, or deliverable format.

## Anti-patterns

- Inspecting a folder and immediately generating the full deck
- Treating missing files as permission to reuse a previous project's style
- Asking questions already answered by the plan
- Asking dozens of low-impact preference questions
- Reporting only after all work is finished
- Changing the lesson objective during content enrichment without confirmation
- Showing a style sampler without first explaining its visual premise
- Treating user silence as approval to pass the next gate
