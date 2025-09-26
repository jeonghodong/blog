---
title: "Husky로 코드 품질 지키기: Git Hooks 자동화 완벽 가이드"
date: 2025-09-26
lastmod: 2025-09-26
excerpt: 팀 프로젝트를 진행하다 보면 한 번쯤은 겪어봤을 상황입니다. 서로 다른 코드 스타일, 미처 발견하지 못한 버그, 테스트를 깜빡하고 푸시한 코드들...
tags:
  - CI/CD
  - Husky
  - 자동화
draft: false
thumbnail: image.png
---
## 들어가며

**"또 린팅 에러로 빌드가 실패했네..."**

팀 프로젝트를 진행하다 보면 한 번쯤은 겪어봤을 상황입니다. 서로 다른 코드 스타일, 미처 발견하지 못한 버그, 테스트를 깜빡하고 푸시한 코드들... 이런 문제들로 인해 개발 속도가 늦어지고 팀의 생산성이 떨어진 경험이 있으실 겁니다.

이 글에서는 **Husky를 활용해 Git Hooks 자동화 시스템을 구축**하여 이런 문제들을 근본적으로 해결하는 방법을 실제 프로젝트 경험을 바탕으로 단계별로 알려드리겠습니다.

**이 글을 읽고 나면**

1. Husky가 무엇인지, 왜 필요한지 이해할 수 있습니다.

2. pre-commit과 pre-push 훅을 설정하는 구체적인 방법을 알 수 있습니다.

3. 실제 프로젝트에 바로 적용할 수 있는 설정 방법을 배울 수 있습니다.

## Husky가 뭐길래?

**Husky는 Git Hooks를 쉽게 관리할 수 있게 도와주는 도구**입니다.
\
Git Hooks란 Git의 특정 이벤트(커밋, 푸시 등) 발생 시 자동으로 실행되는 스크립트를 말합니다.

### 왜 Git Hooks가 필요할까요?

개발 과정에서 이런 일들이 반복되지 않으셨나요?

- 코드 포맷팅이 제각각이라 리뷰할 때 집중이 안 됨

- 테스트를 실행하지 않고 푸시해서 CI/CD 파이프라인이 실패

- 린트 에러가 있는 코드가 메인 브랜치에 머지됨

Git Hooks를 사용하면 **이런 문제들을 사전에 방지**할 수 있습니다.

## 프로젝트에 Husky 도입하기

제가 실제로 팀 프로젝트에 적용한 과정을 단계별로 설명해드리겠습니다.

### 1단계: Husky 설치 및 초기 설정

```bash
# Husky 설치
npm install --save-dev husky

# Husky 초기화
npx husky install

# package.json에 prepare 스크립트 추가
# prepare 스크립트는 패키지가 패킹 되기 전에 실행되는 스크립트
npm pkg set scripts.prepare="husky install"
```

**이 명령어들이 하는 일**

- `husky install` .husky 폴더를 생성하고 Git hooks 설정
- `prepare` 스크립트: npm install 시 자동으로 husky가 활성화되도록 설정

### 2단계: pre-commit 훅 설정 - 코드 품질 검증

**문제 상황:** 팀원들이 각자 다른 코드 스타일로 작업하다 보니 코드 리뷰 시 스타일에 대한 지적이 많아져서 정작 로직에 집중하기 어려웠습니다.
\
**해결 방법:** pre-commit 훅에서 ESLint와 Prettier를 자동으로 실행하도록 설정했습니다.

```bash
npx husky add .husky/pre-commit "npm run lint"
npx husky add .husky/pre-commit "npm run format"
```

```json
{
  "scripts": {
    "lint": "eslint . --fix",
    "format": "prettier --write .",
    "lint:check": "eslint .",
    "format:check": "prettier --check ."
  }
}
```

**.husky/pre-commit 파일 내용**

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🔍 Running ESLint..."
npm run lint:check

echo "🎨 Running Prettier..."
npm run format:check

echo "✨ Code quality checks passed!"
```

### 3단계: pre-push 훅 설정 - 테스트 자동화

**문제 상황:** 급하게 작업하다 보면 테스트 실행을 깜빡하고 푸시하는 경우가 자주 있었습니다. 그러면 결국 전체 팀의 개발이 지연이 되더라구요.

**해결 방법:** pre-push 훅에서 모든 테스트를 실행하도록 설정했습니다.

```bash
# pre-push 훅 생성
npx husky add .husky/pre-push "npm test"
```

 **.husky/pre-push 파일 내용**
 ```bash
 #!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🧪 Running tests..."
npm run test

echo "🏗️ Running build to check for build errors..."
npm run build

echo "🚀 All checks passed! Ready to push."
 ```


## 빌드 프로세스 자동화

단순히 테스트만 실행하는 것이 아니라, **빌드까지 성공하는지 검증**하도록 설정했습니다.

```json
{
  "scripts": {
    "test": "jest --passWithNoTests",
    "test:coverage": "jest --coverage",
    "build": "next build",
    "pre-push": "npm run test && npm run build"
  }
}
```

이렇게 하면 빌드 에러가 있는 코드는 애초에 푸시할 수 없게 됩니다.


## 실제 적용 결과

**Before vs After 비교**

**적용 전**

- 코드 리뷰 시간의 30% 이상이 스타일 지적에 소모

- 주 2-3회 CI 파이프라인 실패 발생

- 버그 있는 코드가 메인 브랜치에 머지되는 경우 발생

**적용 후**

- 코드 리뷰가 로직에만 집중할 수 있게 됨

- CI 파이프라인 실패율 90% 감소

- 팀 전체의 코드 품질 향상

**팀원들의 반응**

처음엔 "귀찮다"는 반응이 있었지만, 시간이 지나면서 오히려 좋은 피드백을 받게 되었습니다.

## 추가 팁과 고려사항

**성능 최적화**

Git hooks이 너무 오래 걸리면 개발 흐름이 끊어질 수 있습니다.

```bash
# 변경된 파일만 검사 (lint-staged 활용)
npm install --save-dev lint-staged

# .lintstagedrc.json
{
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{css,scss,md,json}": ["prettier --write"]
}
```

**예외 상황 처리**

```bash
# 긴급한 핫픽스의 경우
git commit --no-verify -m "hotfix: critical bug"

# 또는 환경변수로 조건부 실행
if [ "$CI" = "true" ]; then
  echo "Skipping hooks in CI environment"
  exit 0
fi
```

## 마치며

**Husky는 단순한 도구가 아니라 팀의 개발 문화를 바꿔주는 강력한 시스템**입니다.

처음 설정할 때는 약간의 시간이 필요하지만, 한 번 설정해두면 팀 전체의 코드 품질과 개발 효율성이 크게 향상됩니다. 특히 팀 프로젝트에서 일관된 코드 품질을 유지하고 싶다면 필수적으로 도입해야 할 도구라고 생각합니다.

**핵심 포인트**
- pre-commit으로 코드 스타일 통일

- pre-push로 버그 있는 코드 사전 차단

- 점진적 도입으로 팀 적응 시간 확보

- 성능 최적화로 개발 흐름 유지