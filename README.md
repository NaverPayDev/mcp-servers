# naver-mcp-servers

NaverPay 코드 스타일을 적용한 MCP 서버 프로젝트입니다.

## 코드 스타일 설정

이 프로젝트는 NaverPay의 코드 스타일 패키지들을 사용하여 일관된 코드 품질을 유지합니다.

### 설치된 패키지

- `@naverpay/eslint-config`: ESLint 설정
- `@naverpay/eslint-plugin`: ESLint 플러그인
- `@naverpay/prettier-config`: Prettier 설정
- `@naverpay/markdown-lint`: Markdown 린트 설정
- `@naverpay/editorconfig`: EditorConfig 설정

### 설정 파일

- `.editorconfig`: 에디터 설정 (인코딩, 줄바꿈, 들여쓰기 등)
- `eslint.config.mjs`: ESLint 설정
- `.prettierrc`: Prettier 설정
- `.markdownlint.jsonc`: Markdown 린트 설정
- `.vscode/settings.json`: VS Code 워크스페이스 설정

## 사용법

### 의존성 설치

```bash
pnpm install
```

### 코드 스타일 명령어

```bash
# ESLint 검사
pnpm run lint

# ESLint 자동 수정
pnpm run lint:fix

# Prettier 포맷팅
pnpm run format

# Prettier 검사만 실행
pnpm run format:check

# Markdown 린트 검사
pnpm run lint:md

# Markdown 린트 자동 수정
pnpm run lint:md:fix

# 모든 린트 검사 실행
pnpm run lint:all

# 모든 자동 수정 실행
pnpm run fix:all
```

### Git 훅 설정

프로젝트에는 `husky`와 `lint-staged`가 설정되어 있어 커밋 전에 자동으로 코드 스타일을 검사하고 수정합니다.

Git 훅을 활성화하려면:

```bash
# Husky 설치 (프로젝트 초기 설정 시 한 번만)
npx husky install

# pre-commit 훅 추가
npx husky add .husky/pre-commit "npx lint-staged"
```

### VS Code 설정

`.vscode/settings.json` 파일이 포함되어 있어 VS Code에서 다음 기능들이 자동으로 활성화됩니다:

- 파일 저장 시 자동 포맷팅
- ESLint 자동 수정
- EditorConfig 적용

권장 확장프로그램:

- Prettier - Code formatter
- ESLint
- EditorConfig for VS Code
- markdownlint

## 프로젝트 구조

```
naver-mcp-servers/
├── .editorconfig          # 에디터 설정
├── .prettierrc           # Prettier 설정
├── .markdownlint.jsonc   # Markdown 린트 설정
├── eslint.config.mjs     # ESLint 설정
├── .vscode/
│   └── settings.json     # VS Code 설정
├── package.json          # 패키지 설정 및 스크립트
└── README.md            # 프로젝트 문서
```

## 개발 가이드

### 코드 작성 시 주의사항

1. **들여쓰기**: JavaScript/TypeScript는 스페이스 2개, Java는 탭 4개
2. **줄바꿈**: LF(\n) 사용
3. **파일 끝**: 새줄 문자로 끝나야 함
4. **줄 끝 공백**: 제거해야 함
5. **인코딩**: UTF-8 사용

### 커밋 전 체크리스트

Git 훅이 자동으로 실행되지만, 수동으로 확인하고 싶다면:

```bash
# 1. 모든 린트 검사
pnpm run lint:all

# 2. 문제가 있다면 자동 수정
pnpm run fix:all

# 3. 다시 검사하여 확인
pnpm run lint:all
```

## 문제 해결

### ESLint 오류

```bash
# ESLint 캐시 삭제
rm .eslintcache

# node_modules 재설치
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Prettier 설정 충돌

NaverPay Prettier 설정이 적용되지 않는 경우, `.prettierrc` 파일에서 설정을 확인하세요.

### 에디터 설정

에디터에서 EditorConfig가 적용되지 않는 경우, 해당 플러그인이 설치되어 있는지 확인하세요.
