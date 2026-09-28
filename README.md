# BuckMoon Courseware

[한국어](#한국어) · [English](#english)

## 한국어

BuckMoon Courseware는 수업계획서, 내용 메모, 디자인 참고자료, 기존 교안을 바탕으로 다음 자료를 함께 설계하고 제작하는 Codex 스킬입니다.

- 교강사가 그대로 활용할 수 있는 상세 수업 스크립트
- 학생에게 보여줄 PowerPoint 또는 인터랙티브 HTML 교안
- 수업 흐름과 연결되는 학생 활동지

정해진 디자인을 반복하는 PPT 템플릿이 아니라, 수업의 목적과 대상에 맞춰 콘텐츠·레이아웃·시각 요소·애니메이션·활동지를 조율하는 오케스트레이션 스킬입니다. 같은 작업 흐름을 사용하더라도 프로젝트마다 서로 다른 시각 체계를 만들 수 있습니다.

### 주요 기능

- 수업계획서의 문장을 그대로 옮기지 않고 학습 목표와 수업 흐름을 해석합니다.
- 학생용 화면, 교강사용 설명, 제작용 메타데이터를 분리합니다.
- 슬라이드 목차와 상세 수업 스크립트를 서로 연결해 작성합니다.
- 확정된 수업 흐름을 바탕으로 학생 활동지를 만듭니다.
- 제공된 글꼴, 색상표, 템플릿, 디자인 참고자료를 프로젝트에 맞게 적용합니다.
- 설명, 비교, 활동, 질문 등 장면의 목적에 맞춰 레이아웃과 모션을 선택합니다.
- 슬라이드 렌더링, 인터랙션, 단계별 공개, 정적 화면 대체 상태를 확인합니다.
- 작업 중간 파일은 분리하고 최종 결과물은 형식별로 하나만 남깁니다.

### 스킬 구성

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

`SKILL.md`에는 전체 작업 흐름이 들어 있습니다. 세부 작업이 필요할 때만 `references/` 안의 해당 문서를 불러와 사용합니다.

### 설치

이 저장소를 Codex 스킬 폴더에 복제하거나 내려받아 다음 위치에 `SKILL.md`가 놓이도록 합니다.

```text
~/.codex/skills/buckmoon-courseware/SKILL.md
```

Windows의 기본 위치는 보통 다음과 같습니다.

```text
%USERPROFILE%\.codex\skills\buckmoon-courseware\SKILL.md
```

스킬 목록에 바로 나타나지 않으면 Codex를 다시 시작하거나 새로고침합니다.

### 사용 방법

Codex에게 BuckMoon Courseware 스킬을 사용해 달라고 요청하면서 준비된 자료를 함께 제공합니다.

- 수업계획서 또는 내용 메모
- 수업 대상, 수업 시간, 학습 목표
- 디자인 Markdown, 참고 교안, 색상표, 글꼴, 기관 브랜딩 자료
- 필요한 결과 형식: HTML, PPTX, 활동지 또는 여러 형식의 조합
- 수정하려는 기존 교안이나 활동지

기본 작업 방식은 협업형입니다. 먼저 제공된 자료를 확인하고, 결과를 실제로 바꿀 수 있는 질문만 사용자에게 묻습니다. 내용과 디자인 방향을 적절한 시점에 확인한 뒤 제작과 검수를 진행합니다.

### 디자인 원칙

BuckMoon은 모든 프로젝트에 같은 시각적 특징을 반복하지 않습니다. 디자인 참고자료를 분위기, 마감 방식, 정보 밀도, 시각 문법, 레이아웃 유형, 모션으로 나누어 살펴보고 수업에 맞는 조합을 선택합니다. 하나의 교안 안에서는 일관성을 유지하되, 다른 프로젝트에는 그 내용과 대상에 어울리는 새로운 구성을 사용합니다.

### 필요 환경

- 로컬 스킬을 지원하는 Codex
- PPTX 제작 시 Codex의 프레젠테이션 제작 기능
- 인터랙티브 HTML 제작 시 사용할 수 있는 브라우저 또는 HTML 제작 환경
- 자연스러운 한국어 학생용 문장과 교강사 스크립트를 위한 `humanize-text` 스킬 권장

외부 글꼴, 이미지, 템플릿, 생성형 미디에는 각 자료의 라이선스와 사용 조건이 별도로 적용됩니다.

---

## English

BuckMoon Courseware is a Codex skill for turning lesson plans, content notes, design references, and existing classroom materials into detailed teaching scripts, coherent PowerPoint or HTML lesson decks, and activity worksheets.

It is an orchestration skill rather than a fixed slide theme. The same workflow can produce PowerPoint or interactive HTML while allowing each project to use a different visual system.

### What it helps with

- interprets a lesson plan instead of copying it directly onto slides;
- separates student-facing content, speaker notes, and production metadata;
- prepares a detailed teaching script and synchronized deck outline;
- creates activity worksheets from the confirmed classroom flow;
- adapts supplied fonts, palettes, templates, and design references;
- selects layouts and motion according to the teaching purpose;
- checks rendered slides, interactions, reveal states, and static fallbacks;
- keeps public deliverables free of numbered candidate versions.

### Skill structure

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

### Installation

Place this repository in your Codex skills directory so that `SKILL.md` is located at:

```text
~/.codex/skills/buckmoon-courseware/SKILL.md
```

On Windows, the default location is usually:

```text
%USERPROFILE%\.codex\skills\buckmoon-courseware\SKILL.md
```

Restart or refresh Codex after installation if the skill does not appear immediately.

### Typical use

Ask Codex to use BuckMoon Courseware and provide any materials already available, such as:

- lesson plan or content notes;
- audience, class duration, and learning objective;
- design Markdown, reference deck, palette, font, or brand material;
- required output format: HTML, PPTX, worksheet, or a combination;
- an existing deck or worksheet that should be revised.

The default workflow is collaborative. It inspects the inputs, asks only questions that would materially change the result, confirms the content and visual direction at an appropriate checkpoint, and then builds and verifies the requested artifacts.

### Design principle

BuckMoon does not reuse a permanent visual signature. The design reference separates tone, finish, density, visual grammar, layout family, and motion so each lesson can choose an appropriate combination while remaining consistent inside one project.

### Requirements

- Codex with support for local skills;
- the built-in presentation skill when producing PPTX;
- an available browser or HTML toolchain when producing interactive HTML;
- `humanize-text` is recommended for natural Korean student copy and teacher narration.

External fonts, images, templates, and generated media remain subject to their own licenses and usage permissions.

## License

MIT
