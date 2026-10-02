# User voice calibration

Read this reference when a new project needs substantial student-facing copy or teacher narration and the user's preferred Korean voice is not already clear from supplied materials or corrections in the current project.

## Purpose

`humanize-text` removes common AI patterns. It does not know how this user would actually order a sentence, address students, explain a difficult term, or write a slide title. Build a small project voice profile before drafting at scale, then use `humanize-text` only as a second-pass detector.

The user's own rewrites outrank generic natural-language rules. Do not “improve” a confirmed user expression back into a smoother but less characteristic AI sentence.

## Decide whether calibration is needed

Read relevant confirmed examples from the resolved local user-preferences file before counting available evidence. Follow [experience-workflow.md](experience-workflow.md) for discovery and persistence. Current audience, task, and explicit voice instructions override stored preferences; do not borrow another instructor's profile. Ask only for voices or functions still underrepresented.

Voice evidence is sufficient when the project already contains several examples of the user's own:

- teacher narration or spoken transitions;
- student-facing titles and instructions;
- corrections of phrases they disliked;
- explanations of why a sentence felt unnatural.

Extract the patterns and show a short inferred profile for confirmation. Do not ask the five questions again merely because a new deck is being made.

Run calibration when all of the following are true:

- the task includes a new script, major rewrite, or substantial deck copy;
- voice will materially affect the result;
- fewer than three useful examples are available for one of the required voices.

For a small correction, sampler, or urgent revision, ask for one or two examples only when needed. If the user declines, label the profile provisional and show representative lines at the content checkpoint.

## Five-sentence calibration

Ask in one compact batch. Explain that there is no right answer and that the user may rewrite freely, shorten the sentence, or say they would not use it. Keep the placeholders relevant to the lesson when possible, but test the same five functions.

```text
제가 쓰는 ‘자연스러운 문장’과 선생님이 실제로 쓰는 문장은 다를 수 있어서 말투를 먼저 맞춰보려고 합니다. 아래 문장을 선생님이라면 어떻게 말하거나 화면에 쓸지 편하게 고쳐주세요. 아예 쓰지 않을 문장은 “안 씀”이라고 적어도 됩니다.

[교강사 스크립트]
1. “오늘 수업이 끝나면 여러분의 손에 남을 세 가지가 있습니다.”
2. “이 자료가 우리에게 던지는 질문은 무엇일까요?”
3. “단순히 답을 찾는 데서 멈추지 않고, 왜 이런 결과가 나왔는지까지 살펴보겠습니다.”

[학생용 교안]
4. 제목: “데이터가 말해 주는 변화의 순간”
5. 활동 안내: “여러분만의 관점으로 자료 속 패턴을 발견해 보세요.”
```

These are diagnostic prompts, not preferred sentences. Never place them in a deliverable unless the user has chosen or rewritten them.

The five prompts test:

1. opening and expectation setting;
2. how the user asks a classroom question;
3. sentence order, contrast, and transition language;
4. literal title versus metaphorical or slogan-like title;
5. concrete activity instruction versus vague encouragement.

## Build the voice profile

Record the profile in the project decision record, not on the student canvas. Keep it short and evidence-based.

```text
사용자 말투 프로필
- 교강사 스크립트: 종결어미, 학생 호칭, 질문 방식, 전환 방식
- 학생용 교안: 제목 형태, 문장 길이, 지시문 방식, 전문용어 설명 수준
- 문장 배열: 주제·행위자·조건을 두는 순서
- 생략 허용 범위: 주어·목적어를 생략해도 되는 맥락
- 선호 표현: 사용자가 실제로 고친 문장 3~5개
- 피할 표현: 사용자가 거부한 문장과 거부 이유
- 확신도: confirmed / provisional
```

Infer patterns from the rewrites instead of reducing them to a list of favorite endings. Useful observations include:

- whether the user states the topic or task before the interpretation;
- whether the user prefers direct verbs over metaphors and abstract nouns;
- how much context a slide sentence must carry on its own;
- whether spoken narration uses `~요`, `~죠`, `~볼게요`, or a more formal register;
- whether a question is asked directly or introduced with a short reason;
- how technical terms are followed by plain explanations.

Do not infer demographic traits, personality, or opinions that are not present in the examples.

## Korean sentence-order and context checks

Apply these checks before the general humanizer pass:

- Put the topic, actor, object, condition, or classroom task early enough that the sentence can be understood in Korean without mentally translating an English construction.
- Do not hide the actual claim behind a dramatic noun phrase and reveal it at the end.
- Avoid imported rhetorical shapes such as `손에 남을 세 가지`, `질문을 던지는 자료`, `X가 말해 주는 Y`, and `단순히 A가 아니라 B` unless the user's examples show that they use them.
- Korean permits omitted subjects, but omit them only when the preceding sentence or visible scene makes the actor and object obvious. A sentence placed alone on a slide must not depend on a missing subject or premise.
- Do not use fragments merely to sound conversational. A short fragment needs a clear visual referent or a preceding spoken sentence.
- Do not mix report-style noun phrases with casual spoken endings in one sentence. Choose the student-copy register or the teacher-speaking register first.
- Preserve professional terms, then explain them with ordinary verbs and a concrete subject. Do not replace the term with a vague metaphor.

These are default risk checks, not a ban list. A confirmed user example can override them.

## Apply and maintain the profile

Draft student copy and teacher narration separately. For each voice:

1. write from the lesson facts and the confirmed profile;
2. compare representative lines with the user's paired examples;
3. run `humanize-text` to catch remaining translationese, stock phrases, abstraction, and mechanical rhythm;
4. reject any humanizer edit that conflicts with the confirmed profile;
5. read teacher narration aloud and inspect student copy without narration;
6. show two or three representative lines at the content checkpoint when the profile is provisional or newly created.

Every later user correction becomes new evidence. Record the rejected wording, the user's replacement, and the reason if stated. Update the profile rather than adding a one-off ban to the global skill.

Persist general user preferences in the local preference file and project-specific corrections in their case record. Mark inferred patterns provisional and supersede obsolete preferences when the user changes direction. Do not treat the five diagnostic prompts as confirmed examples or copy them into memory as the user's voice.

## Acceptance checks

Before approving the language pass, verify:

- A student can identify the subject, action, or decision required by every standalone slide sentence.
- The teacher can read the narration aloud without rearranging clauses mid-sentence.
- Titles name the actual topic, question, evidence, or task unless the user explicitly wants a slogan.
- A technical term is preserved and its first explanation uses plain Korean.
- The draft does not imitate the wording of an unrelated prior project.
- The user’s confirmed before/after examples are reflected in both sentence order and register, not only in sentence endings.
