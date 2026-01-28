# FMS Color System

**Material Vivid × Industrial Maritime Luxury**

Deep Navy + Warm Gold 기반의 프리미엄 다크 테마 색상 시스템.

## CSS 변수 정의

```css
:root {
  /* ===== Core Palette - Deep Navy Dominant ===== */
  --navy-950: #030712;  /* 가장 어두운 배경 */
  --navy-900: #0A1628;  /* 기본 배경 (surface-base) */
  --navy-800: #0F1D32;  /* 약간 밝은 배경 */
  --navy-700: #162544;  /* Elevated 표면 */
  --navy-600: #1E3A5F;  /* 카드 배경 */
  --navy-500: #2563EB;  /* Primary Blue */

  /* RGB 값 (투명도 조절용) */
  --navy-900-rgb: 10, 22, 40;
  --navy-700-rgb: 22, 37, 68;
  --navy-600-rgb: 30, 58, 95;

  /* ===== Accent - Warm Gold ===== */
  --gold-300: #F5D98A;  /* 밝은 골드 (하이라이트) */
  --gold-400: #E8C468;  /* 호버 상태 */
  --gold-500: #D4A853;  /* 기본 악센트 */
  --gold-600: #B8923F;  /* 버튼 그라데이션 끝 */
  --gold-700: #9A7B35;  /* 어두운 골드 */

  /* RGB 값 */
  --gold-500-rgb: 212, 168, 83;

  /* ===== Semantic Colors ===== */
  --success: #10B981;
  --success-muted: rgba(16, 185, 129, 0.15);
  --warning: #F59E0B;
  --warning-muted: rgba(245, 158, 11, 0.15);
  --error: #EF4444;
  --error-muted: rgba(239, 68, 68, 0.15);
  --info: #3B82F6;
  --info-muted: rgba(59, 130, 246, 0.15);

  /* ===== Surface System - Glass Morphism Ready ===== */
  --surface-base: #0A1628;
  --surface-elevated: rgba(22, 37, 68, 0.7);
  --surface-card: rgba(30, 58, 95, 0.4);
  --surface-hover: rgba(37, 99, 235, 0.08);
  --surface-active: rgba(37, 99, 235, 0.12);

  /* Glass Effect */
  --glass-bg: rgba(22, 37, 68, 0.6);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-border-hover: rgba(212, 168, 83, 0.3);

  /* ===== Text Hierarchy ===== */
  --text-primary: #F8FAFC;
  --text-secondary: #94A3B8;
  --text-muted: #64748B;
  --text-accent: #D4A853;
  --text-inverse: #0A1628;

  /* ===== Border Colors ===== */
  --border-default: rgba(148, 163, 184, 0.2);
  --border-accent: rgba(212, 168, 83, 0.3);
  --border-subtle: rgba(255, 255, 255, 0.05);

  /* ===== Shadow System ===== */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.3);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.3);
  --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.3);
  --shadow-glow: 0 0 40px rgba(212, 168, 83, 0.15);

  /* ===== State Layer Opacities ===== */
  --state-hover: 0.08;
  --state-focus: 0.12;
  --state-pressed: 0.16;
  --state-dragged: 0.20;

  /* ===== 물류 카테고리별 색상 ===== */
  /* 해상수출 (Sea Export) - Blue */
  --logistics-sea-export: #3B82F6;
  --logistics-sea-export-muted: rgba(59, 130, 246, 0.15);
  --logistics-sea-export-light: #DBEAFE;
  --logistics-sea-export-dark: #1E40AF;

  /* 해상수입 (Sea Import) - Green */
  --logistics-sea-import: #10B981;
  --logistics-sea-import-muted: rgba(16, 185, 129, 0.15);
  --logistics-sea-import-light: #D1FAE5;
  --logistics-sea-import-dark: #065F46;

  /* 항공수출 (Air Export) - Purple */
  --logistics-air-export: #8B5CF6;
  --logistics-air-export-muted: rgba(139, 92, 246, 0.15);
  --logistics-air-export-light: #EDE9FE;
  --logistics-air-export-dark: #5B21B6;

  /* 항공수입 (Air Import) - Amber */
  --logistics-air-import: #F59E0B;
  --logistics-air-import-muted: rgba(245, 158, 11, 0.15);
  --logistics-air-import-light: #FEF3C7;
  --logistics-air-import-dark: #B45309;

  /* OMS - Pink */
  --logistics-oms: #EC4899;
  --logistics-oms-muted: rgba(236, 72, 153, 0.15);
  --logistics-oms-light: #FCE7F3;
  --logistics-oms-dark: #9D174D;

  /* 공통 (Common) - Gray */
  --logistics-common: #64748B;
  --logistics-common-muted: rgba(100, 116, 139, 0.15);
  --logistics-common-light: #F1F5F9;
  --logistics-common-dark: #334155;
}
```

## Tailwind 색상 확장

```javascript
// tailwind.config.js colors 섹션
colors: {
  // Navy Palette
  navy: {
    950: 'var(--navy-950)',
    900: 'var(--navy-900)',
    800: 'var(--navy-800)',
    700: 'var(--navy-700)',
    600: 'var(--navy-600)',
    500: 'var(--navy-500)',
  },
  // Gold Palette
  gold: {
    300: 'var(--gold-300)',
    400: 'var(--gold-400)',
    500: 'var(--gold-500)',
    600: 'var(--gold-600)',
    700: 'var(--gold-700)',
  },
  // Surface
  surface: {
    base: 'var(--surface-base)',
    elevated: 'var(--surface-elevated)',
    card: 'var(--surface-card)',
    hover: 'var(--surface-hover)',
    active: 'var(--surface-active)',
  },
  // Text
  text: {
    primary: 'var(--text-primary)',
    secondary: 'var(--text-secondary)',
    muted: 'var(--text-muted)',
    accent: 'var(--text-accent)',
  },
  // Semantic
  success: {
    DEFAULT: 'var(--success)',
    muted: 'var(--success-muted)',
  },
  warning: {
    DEFAULT: 'var(--warning)',
    muted: 'var(--warning-muted)',
  },
  error: {
    DEFAULT: 'var(--error)',
    muted: 'var(--error-muted)',
  },
  info: {
    DEFAULT: 'var(--info)',
    muted: 'var(--info-muted)',
  },
  // Logistics Categories
  logistics: {
    'sea-export': 'var(--logistics-sea-export)',
    'sea-import': 'var(--logistics-sea-import)',
    'air-export': 'var(--logistics-air-export)',
    'air-import': 'var(--logistics-air-import)',
    'oms': 'var(--logistics-oms)',
    'common': 'var(--logistics-common)',
  },
}
```

## Glass Morphism 스타일

```css
/* 기본 Glass Card */
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
}

.glass-card:hover {
  border-color: var(--glass-border-hover);
  box-shadow: var(--shadow-card), var(--shadow-glow);
}

/* Elevated Glass Surface */
.glass-elevated {
  background: var(--surface-elevated);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border-subtle);
}
```

## State Layer (Gold 기반)

```css
/* M3 스타일 State Layer with Gold */
.state-layer {
  position: relative;
  isolation: isolate;
}

.state-layer::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: var(--gold-500);
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  border-radius: inherit;
}

.state-layer:hover::before { opacity: var(--state-hover); }
.state-layer:focus-visible::before { opacity: var(--state-focus); }
.state-layer:active::before { opacity: var(--state-pressed); }
```

## 사용 예시

```html
<!-- Glass Card with Gold Hover -->
<div class="glass-card state-layer p-6 transition-all duration-300
            hover:-translate-y-1 cursor-pointer">
  <h3 class="text-text-primary font-semibold">카드 제목</h3>
  <p class="text-text-secondary text-sm mt-2">설명 텍스트</p>
</div>

<!-- Gold Accent Button -->
<button class="px-6 py-3 rounded-xl font-semibold
               bg-gradient-to-br from-gold-500 to-gold-600
               text-navy-900 shadow-[0_4px_16px_rgba(212,168,83,0.3)]
               hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,168,83,0.4)]
               active:scale-[0.98] transition-all duration-300">
  저장
</button>

<!-- 물류 도메인별 뱃지 -->
<span class="px-2.5 py-1 rounded-lg text-xs font-semibold font-mono uppercase
             bg-logistics-sea-export/15 text-logistics-sea-export">
  해상수출
</span>
```
