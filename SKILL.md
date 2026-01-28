---
name: material-vivid
description: FMS 물류 플랫폼 전용 디자인 시스템. Material Vivid × Industrial Maritime Luxury 컨셉으로 Deep Navy + Warm Gold 테마, Glass Morphism, Noise Texture를 적용합니다. 해상수출/수입, 항공수출/수입, OMS 등 물류 도메인별 특화 UI를 생성합니다. B/L, AWB, 부킹, 스케줄 관리 화면을 만들 때 사용하세요.
---

# Material Vivid Design System (FMS Edition)

**Material Vivid × Industrial Maritime Luxury**

물류 산업의 전문성과 신뢰감을 현대적이고 세련된 디자인으로 표현하는 FMS 전용 디자인 시스템.

## 핵심 원칙

**"Premium Dark Theme with Glass Morphism & Noise Texture"**

1. **Premium**: 고급스러운 골드 악센트와 딥 네이비 기반
2. **Trust**: 안정적이고 신뢰감 있는 색상 체계
3. **Functional**: 데이터 중심의 명확한 정보 계층
4. **Clarity First**: 복잡한 물류 데이터를 명확하게 전달

## 활성화 트리거

다음 키워드가 포함된 요청 시 자동 활성화:
- "FMS", "물류", "포워딩", "로지스틱스"
- "대시보드", "B/L", "AWB", "부킹", "선적"
- "해상수출", "해상수입", "항공수출", "항공수입"
- "OMS", "견적", "스케줄", "통관"
- "물류 UI", "FMS 디자인", "해상수출 페이지"

## 필수 기술 스택

```html
<!-- Google Fonts (Outfit + JetBrains Mono) -->
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300..700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

<!-- Heroicons (Outline) -->
<!-- 인라인 SVG로 삽입 -->

<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
```

## 금지 사항 (절대 사용 금지)

| 카테고리 | 금지 항목 |
|---------|----------|
| 폰트 | Roboto 기본, Noto Sans 기본, 굴림, 돋움, 맑은고딕 |
| 색상 | 순수 흰색 `#FFFFFF`, 순수 검정 `#000000`, 하드코딩 색상 |
| 스타일 | 평면 단색 배경, 고정 그림자, 라이트 테마 기본 |
| UI 텍스트 | "~하기" 형태 ("저장하기" → "저장"), 이모지, 느낌표 남용 |

## 리소스 파일

- **references/color-system.md**: Navy + Gold 색상 팔레트 및 CSS 변수
- **references/components.md**: Glass Card, Stat Card, 물류 뱃지 등 컴포넌트
- **references/motion-patterns.md**: CSS/JS 애니메이션 패턴
- **references/page-patterns.md**: 목록/상세/등록 페이지 레이아웃 패턴
- **references/logistics-domain.md**: 물류 용어, 상태 뱃지, UI 텍스트 규칙
- **assets/tailwind-config.js**: Tailwind 설정 템플릿

## 워크플로우

### 1단계: 기본 설정

`assets/tailwind-config.js`의 설정을 적용하고, 필수 폰트를 로드.

### 2단계: 색상 시스템 적용

`references/color-system.md`에서 Navy + Gold 팔레트 CSS 변수를 `:root`에 정의.

### 3단계: 도메인 확인

`references/logistics-domain.md`에서 해당 도메인(해상수출/수입, 항공수출/수입, OMS)의 색상 및 상태 뱃지 확인.

### 4단계: 페이지 패턴 선택

`references/page-patterns.md`에서 페이지 유형(목록/상세/등록/대시보드) 패턴 선택.

### 5단계: 컴포넌트 조립

`references/components.md`에서 필요한 UI 요소를 선택하여 조합.

### 6단계: 모션 추가

`references/motion-patterns.md`의 패턴을 인터랙티브 요소에 적용.

## 필수 체크리스트

모든 결과물에 반드시 포함:

- [ ] Outfit 또는 JetBrains Mono 폰트
- [ ] CSS Custom Properties 기반 Navy + Gold 색상
- [ ] Glass Morphism (backdrop-blur + rgba 배경)
- [ ] State Layer (호버/액티브 피드백 with Gold)
- [ ] Dark Mode 기본 (Deep Navy #0A1628 기반)
- [ ] 모바일 우선 반응형 (`sm:`, `md:`, `lg:`, `xl:`)
- [ ] CSS Transition (기본 0.3s cubic-bezier(0.4, 0, 0.2, 1))
- [ ] 숫자는 JetBrains Mono (모노스페이스)
- [ ] 물류 상태 뱃지는 도메인별 색상 적용

## 디자인 원칙 요약

| 원칙 | 설명 |
|------|------|
| **Clarity First** | 복잡한 물류 데이터를 명확하게 전달 |
| **Visual Hierarchy** | 정보의 중요도에 따른 시각적 계층 구조 |
| **Consistency** | 일관된 컴포넌트와 패턴 사용 |
| **Accessibility** | 충분한 명도 대비와 직관적인 인터랙션 |
| **Performance** | 최적화된 애니메이션과 렌더링 |
