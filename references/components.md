# FMS Components

**Material Vivid × Industrial Maritime Luxury**

FMS 물류 플랫폼을 위한 Glass Morphism 기반 컴포넌트.

## 레이아웃 구조

### 기본 레이아웃

```html
<body class="bg-navy-900 text-text-primary font-display h-screen overflow-hidden flex">
  <!-- Sidebar -->
  <aside class="w-72 bg-gradient-to-b from-navy-900 to-navy-950
                border-r border-white/5 flex flex-col shrink-0 fixed left-0 top-0 h-full z-40">
    <!-- Sidebar Header -->
    <div class="h-20 flex items-center px-6">
      <span class="font-bold text-xl text-gold-500 tracking-wide">FMS</span>
    </div>
    <!-- Navigation -->
    <nav class="flex-1 overflow-y-auto py-4 px-3 space-y-1">
      <!-- Nav Items -->
    </nav>
  </aside>

  <!-- Main Content -->
  <div class="flex-1 flex flex-col min-w-0 ml-72">
    <!-- Top Header -->
    <header class="h-20 bg-navy-900/85 backdrop-blur-xl border-b border-white/5
                   flex items-center justify-between px-8 shrink-0 sticky top-0 z-30">
      <!-- Header Content -->
    </header>
    <!-- Main Area -->
    <main class="flex-1 overflow-y-auto p-8 bg-navy-950">
      <!-- Page Content -->
    </main>
  </div>
</body>
```

## 네비게이션

### Sidebar Navigation Item

```html
<!-- 기본 상태 -->
<a href="#" class="group flex items-center gap-3 px-4 py-3 rounded-xl
                  text-text-secondary
                  transition-all duration-200
                  hover:bg-white/5 hover:text-text-primary">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <!-- icon path -->
  </svg>
  <span class="font-medium text-sm">대시보드</span>
</a>

<!-- 활성 상태 -->
<a href="#" class="group flex items-center gap-3 px-4 py-3 rounded-xl
                  bg-gold-500/10 text-gold-500 border border-gold-500/20">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <!-- icon path -->
  </svg>
  <span class="font-medium text-sm">해상수출 B/L</span>
</a>
```

### Category Header (Sidebar)

```html
<div class="px-4 py-2 mt-4">
  <span class="text-xs font-semibold text-text-muted uppercase tracking-wider">
    해상수출
  </span>
</div>
```

## Cards

### Glass Card (기본)

```html
<div class="bg-[rgba(22,37,68,0.6)] backdrop-blur-xl
            border border-white/10 rounded-2xl p-6
            shadow-[0_4px_24px_rgba(0,0,0,0.3)]
            transition-all duration-300
            hover:border-gold-500/30 hover:shadow-[0_4px_24px_rgba(0,0,0,0.3),0_0_40px_rgba(212,168,83,0.15)]
            hover:-translate-y-0.5">
  <!-- Card Content -->
</div>
```

### Stat Card (KPI)

```html
<div class="relative bg-[rgba(22,37,68,0.6)] backdrop-blur-xl
            border border-white/10 rounded-2xl p-6
            shadow-[0_4px_24px_rgba(0,0,0,0.3)]
            transition-all duration-300 group
            hover:border-gold-500/30 hover:-translate-y-1 hover:scale-[1.02]">
  <!-- Gold Line (hover시 표시) -->
  <div class="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl
              bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500
              opacity-0 group-hover:opacity-100 transition-opacity"></div>

  <!-- Header -->
  <div class="flex items-start justify-between mb-4">
    <div class="p-3 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10">
      <svg class="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <!-- icon path -->
      </svg>
    </div>
    <span class="text-sm font-mono text-success">+12.5%</span>
  </div>

  <!-- Value -->
  <p class="text-sm text-text-secondary mb-1">진행중 선적</p>
  <p class="text-3xl font-bold text-text-primary font-mono tracking-tight">1,234</p>
</div>
```

### Section Card (폼/목록 컨테이너)

```html
<div class="bg-navy-700 rounded-xl overflow-hidden">
  <!-- Card Header -->
  <div class="px-6 py-4 border-b border-white/5">
    <h3 class="font-semibold text-text-primary">기본 정보</h3>
  </div>
  <!-- Card Body -->
  <div class="p-6">
    <!-- Content -->
  </div>
</div>
```

## Buttons

### Filled Button (Primary - Gold Gradient)

```html
<button class="inline-flex items-center justify-center gap-2
               px-7 py-3 rounded-xl
               bg-gradient-to-br from-gold-500 to-gold-600
               text-navy-900 font-semibold text-sm
               shadow-[0_4px_16px_rgba(212,168,83,0.3)]
               transition-all duration-300
               hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,168,83,0.4)]
               active:scale-[0.98]
               focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:ring-offset-2 focus:ring-offset-navy-900">
  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
  </svg>
  <span>저장</span>
</button>
```

### Outline Button (Secondary)

```html
<button class="inline-flex items-center justify-center gap-2
               px-7 py-3 rounded-xl
               border border-gold-500 text-gold-500 font-semibold text-sm
               bg-transparent
               transition-all duration-300
               hover:bg-gold-500/10 hover:border-gold-400
               active:scale-[0.98]
               focus:outline-none focus:ring-2 focus:ring-gold-500/30">
  <span>취소</span>
</button>
```

### Ghost Button (Tertiary)

```html
<button class="inline-flex items-center justify-center gap-2
               px-7 py-3 rounded-xl
               border border-white/10 text-text-secondary font-medium text-sm
               bg-transparent
               transition-all duration-300
               hover:bg-white/5 hover:text-text-primary hover:border-gold-500/30
               active:scale-[0.98]">
  <span>초기화</span>
</button>
```

### Icon Button

```html
<button class="w-10 h-10 rounded-xl
               flex items-center justify-center
               text-text-muted
               transition-all duration-200
               hover:bg-white/5 hover:text-text-secondary
               active:bg-white/10">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <!-- icon path -->
  </svg>
</button>
```

### Small Button (테이블/목록용)

```html
<button class="inline-flex items-center gap-1.5
               px-4 py-2 rounded-lg
               bg-gold-500 text-navy-900 font-medium text-xs
               transition-all duration-200
               hover:bg-gold-400
               active:scale-[0.98]">
  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
  </svg>
  <span>등록</span>
</button>
```

## 상태 뱃지 (Status Badges)

### 기본 뱃지 스타일

```html
<!-- Success (완료, 확정) -->
<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg
             bg-success/15 text-success
             text-[11px] font-semibold font-mono uppercase tracking-wide">
  완료
</span>

<!-- Warning (진행중, 대기) -->
<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg
             bg-warning/15 text-warning
             text-[11px] font-semibold font-mono uppercase tracking-wide">
  진행중
</span>

<!-- Error (취소, 에러) -->
<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg
             bg-error/15 text-error
             text-[11px] font-semibold font-mono uppercase tracking-wide">
  취소
</span>

<!-- Info (요청, 접수) -->
<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg
             bg-info/15 text-info
             text-[11px] font-semibold font-mono uppercase tracking-wide">
  요청
</span>

<!-- Gold (특별, 긴급) -->
<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg
             bg-gold-500/15 text-gold-500
             text-[11px] font-semibold font-mono uppercase tracking-wide">
  긴급
</span>

<!-- Gray (작성중, 임시) -->
<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg
             bg-white/10 text-text-muted
             text-[11px] font-semibold font-mono uppercase tracking-wide">
  작성중
</span>
```

### 물류 상태 뱃지 (도메인별)

```html
<!-- 해상수출 - 부킹요청 -->
<span class="inline-flex items-center px-2.5 py-1 rounded-lg
             bg-[#DBEAFE] text-[#2563EB]
             text-[11px] font-semibold font-mono uppercase">
  부킹요청
</span>

<!-- 해상수출 - 부킹확정 -->
<span class="inline-flex items-center px-2.5 py-1 rounded-lg
             bg-[#D1FAE5] text-[#059669]
             text-[11px] font-semibold font-mono uppercase">
  부킹확정
</span>

<!-- 해상수입 - 통관중 -->
<span class="inline-flex items-center px-2.5 py-1 rounded-lg
             bg-[#FEF3C7] text-[#D97706]
             text-[11px] font-semibold font-mono uppercase">
  통관중
</span>

<!-- 항공수출 - 운송중 -->
<span class="inline-flex items-center px-2.5 py-1 rounded-lg
             bg-[#DBEAFE] text-[#2563EB]
             text-[11px] font-semibold font-mono uppercase">
  운송중
</span>

<!-- B/L 타입 -->
<span class="inline-flex items-center px-2.5 py-1 rounded-lg
             bg-gold-500/15 text-gold-500
             text-[11px] font-semibold font-mono uppercase">
  ORIGINAL
</span>
```

## Form Elements

### Text Input

```html
<div class="space-y-1.5">
  <label class="text-xs font-medium text-text-secondary">
    B/L No. <span class="text-error">*</span>
  </label>
  <input type="text"
         class="w-full px-4 py-3 rounded-xl
                bg-navy-600 border border-white/10
                text-text-primary placeholder:text-text-muted
                font-mono
                transition-all duration-200
                focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
         placeholder="B/L 번호 입력">
</div>
```

### Select

```html
<select class="w-full px-4 py-3 rounded-xl
               bg-navy-600 border border-white/10
               text-text-primary
               transition-all duration-200
               focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20">
  <option value="">전체 상태</option>
  <option value="request">부킹요청</option>
  <option value="confirm">부킹확정</option>
</select>
```

### Search Input with Button

```html
<div class="relative">
  <input type="text"
         class="w-full pl-10 pr-4 py-3 rounded-xl
                bg-navy-600 border border-white/10
                text-text-primary placeholder:text-text-muted
                transition-all duration-200
                focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
         placeholder="검색어 입력...">
  <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted"
       fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
</div>
```

### Lookup Input (팝업 검색)

```html
<div class="relative">
  <input type="text"
         class="w-full pl-4 pr-10 py-3 rounded-xl
                bg-navy-600 border border-white/10
                text-text-primary
                transition-all duration-200
                focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
         placeholder="거래처 선택"
         readonly>
  <button class="absolute right-2 top-1/2 -translate-y-1/2 p-1.5
                 rounded-lg hover:bg-white/10 transition-colors">
    <svg class="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </button>
</div>
```

### Checkbox

```html
<label class="flex items-center gap-2 cursor-pointer">
  <input type="checkbox"
         class="w-4 h-4 rounded border-white/20 bg-navy-600
                text-gold-500 focus:ring-gold-500/30 focus:ring-offset-navy-900">
  <span class="text-sm text-text-secondary">전체 선택</span>
</label>
```

## Data Table

```html
<div class="bg-navy-700 rounded-xl overflow-hidden">
  <!-- Table Header -->
  <div class="px-6 py-4 border-b border-white/5 flex items-center justify-between">
    <h3 class="font-semibold text-text-primary">부킹 목록</h3>
    <span class="text-sm text-text-muted">총 156건</span>
  </div>

  <!-- Table -->
  <div class="overflow-x-auto">
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-navy-600 text-text-secondary text-xs uppercase">
          <th class="px-4 py-3 text-left w-10">
            <input type="checkbox" class="rounded border-white/20 bg-navy-700 text-gold-500">
          </th>
          <th class="px-4 py-3 text-left cursor-pointer hover:text-text-primary transition-colors">
            상태
          </th>
          <th class="px-4 py-3 text-left cursor-pointer hover:text-text-primary transition-colors">
            부킹번호
            <svg class="inline w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 10l5-5 5 5H5z"/>
            </svg>
          </th>
          <!-- More columns -->
        </tr>
      </thead>
      <tbody class="divide-y divide-white/5">
        <tr class="hover:bg-white/5 transition-colors cursor-pointer">
          <td class="px-4 py-3">
            <input type="checkbox" class="rounded border-white/20 bg-navy-700 text-gold-500">
          </td>
          <td class="px-4 py-3">
            <span class="inline-flex px-2.5 py-1 rounded-lg
                         bg-[#D1FAE5] text-[#059669]
                         text-[11px] font-semibold font-mono uppercase">
              확정
            </span>
          </td>
          <td class="px-4 py-3 font-mono text-text-primary">BK2026010001</td>
          <!-- More cells -->
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Pagination -->
  <div class="px-6 py-4 border-t border-white/5 flex items-center justify-between">
    <div class="text-sm text-text-muted">
      선택: <span class="text-gold-500 font-medium">3건</span>
    </div>
    <div class="flex items-center gap-1">
      <button class="px-3 py-1.5 rounded-lg text-text-muted hover:bg-white/5 transition-colors">
        &laquo;
      </button>
      <button class="px-3 py-1.5 rounded-lg text-text-muted hover:bg-white/5 transition-colors">
        &lsaquo;
      </button>
      <span class="px-4 py-1.5 rounded-lg bg-gold-500/10 text-gold-500 font-medium text-sm">
        1 / 10
      </span>
      <button class="px-3 py-1.5 rounded-lg text-text-muted hover:bg-white/5 transition-colors">
        &rsaquo;
      </button>
      <button class="px-3 py-1.5 rounded-lg text-text-muted hover:bg-white/5 transition-colors">
        &raquo;
      </button>
    </div>
  </div>
</div>
```

## Tab Navigation

```html
<div class="flex border-b border-white/10 mb-6">
  <!-- Active Tab -->
  <button class="px-6 py-3 text-sm font-medium text-gold-500
                 border-b-2 border-gold-500 -mb-[1px]">
    기본정보
  </button>
  <!-- Inactive Tab -->
  <button class="px-6 py-3 text-sm font-medium text-text-muted
                 hover:text-text-secondary transition-colors">
    화물정보
  </button>
  <button class="px-6 py-3 text-sm font-medium text-text-muted
                 hover:text-text-secondary transition-colors">
    컨테이너
  </button>
</div>
```

## Progress/Loading

### Skeleton

```html
<div class="animate-pulse">
  <div class="h-4 bg-white/10 rounded w-3/4 mb-2"></div>
  <div class="h-4 bg-white/10 rounded w-1/2"></div>
</div>
```

### Gold Shimmer

```html
<div class="relative overflow-hidden bg-navy-700 rounded-xl p-6">
  <div class="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite]
              bg-gradient-to-r from-transparent via-gold-500/10 to-transparent"></div>
  <!-- Content -->
</div>
```

### Spinner

```html
<div class="w-6 h-6 border-2 border-white/10 border-t-gold-500
            rounded-full animate-spin"></div>
```

## Modal/Dialog

```html
<div class="fixed inset-0 z-50 flex items-center justify-center">
  <!-- Backdrop -->
  <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

  <!-- Modal -->
  <div class="relative bg-navy-800 rounded-2xl border border-white/10
              shadow-2xl w-[600px] max-h-[80vh] overflow-hidden
              animate-[fadeInScale_0.3s_ease-out]">
    <!-- Header -->
    <div class="px-6 py-4 border-b border-white/10 flex items-center justify-between">
      <h3 class="text-lg font-semibold text-text-primary">거래처 검색</h3>
      <button class="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
        <svg class="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Body -->
    <div class="p-6 max-h-[60vh] overflow-y-auto">
      <!-- Content -->
    </div>

    <!-- Footer -->
    <div class="px-6 py-4 border-t border-white/10 flex justify-end gap-3">
      <button class="px-5 py-2.5 rounded-xl text-text-muted hover:text-text-secondary transition-colors">
        취소
      </button>
      <button class="px-5 py-2.5 rounded-xl bg-gold-500 text-navy-900 font-semibold
                     hover:bg-gold-400 transition-colors">
        선택
      </button>
    </div>
  </div>
</div>
```

## Empty State

```html
<div class="flex flex-col items-center justify-center py-16 text-center">
  <div class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
    <svg class="w-8 h-8 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  </div>
  <p class="text-text-secondary mb-1">데이터가 없습니다</p>
  <p class="text-sm text-text-muted">검색 조건을 변경하거나 새 항목을 등록해주세요</p>
</div>
```
