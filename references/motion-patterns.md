# FMS Motion Patterns

**Material Vivid × Industrial Maritime Luxury**

FMS 물류 플랫폼을 위한 애니메이션 및 인터랙션 패턴.

## 핵심 원칙

1. **전문적**: 과하지 않은, 목적이 있는 모션
2. **반응성**: 즉각적이고 부드러운 피드백
3. **일관성**: 동일한 이징과 지속시간 사용

## Easing 함수

```css
:root {
  /* FMS Standard Easing */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-decelerate: cubic-bezier(0, 0, 0.2, 1);
  --ease-accelerate: cubic-bezier(0.4, 0, 1, 1);

  /* FMS Emphasized Easing */
  --ease-emphasized: cubic-bezier(0.2, 0, 0, 1);
  --ease-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);
  --ease-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);

  /* Duration */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
}
```

## 기본 Transition

```css
/* 범용 Transition */
.transition-smooth {
  transition: all var(--duration-normal) var(--ease-standard);
}

.transition-fast {
  transition: all var(--duration-fast) var(--ease-standard);
}

/* 특정 속성 */
.transition-colors {
  transition: color, background-color, border-color var(--duration-fast) var(--ease-standard);
}

.transition-transform {
  transition: transform var(--duration-normal) var(--ease-emphasized);
}

.transition-opacity {
  transition: opacity var(--duration-fast) var(--ease-standard);
}
```

## 호버/프레스 패턴

### Lift Effect (카드, 버튼)

```css
.hover-lift {
  transition: transform var(--duration-normal) var(--ease-standard),
              box-shadow var(--duration-normal) var(--ease-standard);
}

.hover-lift:hover {
  transform: translateY(-2px);
}

.hover-lift:active {
  transform: translateY(0);
}
```

### Scale Effect (버튼)

```css
.press-scale {
  transition: transform var(--duration-fast) var(--ease-standard);
}

.press-scale:hover {
  transform: scale(1.02);
}

.press-scale:active {
  transform: scale(0.98);
}
```

### Gold Glow Effect (프리미엄 요소)

```css
.hover-glow {
  transition: box-shadow var(--duration-normal) var(--ease-standard),
              border-color var(--duration-normal) var(--ease-standard);
}

.hover-glow:hover {
  border-color: rgba(212, 168, 83, 0.3);
  box-shadow: 0 0 40px rgba(212, 168, 83, 0.15);
}
```

## 진입/퇴장 애니메이션

### Fade In Up

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp var(--duration-normal) var(--ease-emphasized-decelerate) forwards;
}
```

### Fade In Scale

```css
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in-scale {
  animation: fadeInScale var(--duration-normal) var(--ease-emphasized-decelerate) forwards;
}
```

### Slide In Left

```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-left {
  animation: slideInLeft var(--duration-normal) var(--ease-emphasized-decelerate) forwards;
}
```

### Slide Up (모달, 팝업)

```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.4s var(--ease-emphasized-decelerate) forwards;
}
```

### Scale In (모달)

```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scaleIn 0.3s var(--ease-emphasized-decelerate) forwards;
}
```

## 로딩 상태

### Gold Shimmer (프리미엄 로딩)

```css
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.shimmer {
  position: relative;
  overflow: hidden;
}

.shimmer::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(212, 168, 83, 0.1) 50%,
    transparent 100%
  );
  animation: shimmer 2s infinite;
}
```

### Skeleton Pulse

```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.skeleton {
  background: rgba(255, 255, 255, 0.1);
  animation: pulse 1.5s ease-in-out infinite;
  border-radius: 8px;
}
```

### Gold Spinner

```css
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 24px;
  height: 24px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--gold-500);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
```

### Pulse Glow (알림, 긴급)

```css
@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(212, 168, 83, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(212, 168, 83, 0.5);
  }
}

.animate-pulse-glow {
  animation: pulseGlow 2s ease-in-out infinite;
}
```

## Stagger Animation

```css
.stagger-item {
  opacity: 0;
  animation: fadeInUp var(--duration-normal) var(--ease-emphasized-decelerate) forwards;
}

.stagger-item:nth-child(1) { animation-delay: 0ms; }
.stagger-item:nth-child(2) { animation-delay: 50ms; }
.stagger-item:nth-child(3) { animation-delay: 100ms; }
.stagger-item:nth-child(4) { animation-delay: 150ms; }
.stagger-item:nth-child(5) { animation-delay: 200ms; }
.stagger-item:nth-child(6) { animation-delay: 250ms; }

/* CSS 클래스로 지연 적용 */
.stagger-1 { animation-delay: 0.05s; }
.stagger-2 { animation-delay: 0.1s; }
.stagger-3 { animation-delay: 0.15s; }
.stagger-4 { animation-delay: 0.2s; }
.stagger-5 { animation-delay: 0.25s; }
.stagger-6 { animation-delay: 0.3s; }
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
  background-color: var(--gold-500, #D4A853);
  opacity: 0;
  transition: opacity 0.2s var(--ease-standard);
  pointer-events: none;
  border-radius: inherit;
}

.state-layer:hover::before { opacity: 0.08; }
.state-layer:focus-visible::before { opacity: 0.12; }
.state-layer:active::before { opacity: 0.16; }
```

## Float Animation (특수 효과)

```css
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Tailwind 애니메이션 확장

```javascript
// tailwind.config.js animation 섹션
animation: {
  'fade-in': 'fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
  'fade-in-up': 'fadeInUp 0.3s cubic-bezier(0.05, 0.7, 0.1, 1) forwards',
  'fade-in-scale': 'fadeInScale 0.3s cubic-bezier(0.05, 0.7, 0.1, 1) forwards',
  'slide-in-left': 'slideInLeft 0.3s cubic-bezier(0.05, 0.7, 0.1, 1) forwards',
  'slide-up': 'slideUp 0.4s cubic-bezier(0.05, 0.7, 0.1, 1) forwards',
  'scale-in': 'scaleIn 0.3s cubic-bezier(0.05, 0.7, 0.1, 1) forwards',
  'shimmer': 'shimmer 2s infinite',
  'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
  'float': 'float 3s ease-in-out infinite',
  'spin': 'spin 0.8s linear infinite',
},

keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  fadeInUp: {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  fadeInScale: {
    '0%': { opacity: '0', transform: 'scale(0.95)' },
    '100%': { opacity: '1', transform: 'scale(1)' },
  },
  slideInLeft: {
    '0%': { opacity: '0', transform: 'translateX(-30px)' },
    '100%': { opacity: '1', transform: 'translateX(0)' },
  },
  slideUp: {
    '0%': { opacity: '0', transform: 'translateY(30px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  scaleIn: {
    '0%': { opacity: '0', transform: 'scale(0.9)' },
    '100%': { opacity: '1', transform: 'scale(1)' },
  },
  shimmer: {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(100%)' },
  },
  pulseGlow: {
    '0%, 100%': { boxShadow: '0 0 20px rgba(212, 168, 83, 0.3)' },
    '50%': { boxShadow: '0 0 40px rgba(212, 168, 83, 0.5)' },
  },
  float: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-5px)' },
  },
},
```
