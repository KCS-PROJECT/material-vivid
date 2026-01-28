# FMS Page Patterns

**Material Vivid × Industrial Maritime Luxury**

FMS 물류 플랫폼의 페이지 유형별 레이아웃 및 디자인 패턴.

## 1. 목록 페이지 (List Page)

B/L 목록, 부킹 목록, 스케줄 목록 등에 사용

### 기본 구조

```
┌─────────────────────────────────────────────────────────┐
│ Page Header                                              │
│ ├─ Title + Subtitle                                     │
│ └─ Close/Back Button                                     │
├─────────────────────────────────────────────────────────┤
│ Search Section (Collapsible Card)                        │
│ ├─ Row 1: 날짜범위 | 상태 | 키워드                      │
│ ├─ Row 2: 추가 필터 (필요시)                            │
│ └─ Actions: [검색] [초기화]                              │
├─────────────────────────────────────────────────────────┤
│ Action Bar                                               │
│ ├─ Left: 선택 n건 | 필터 태그                           │
│ └─ Right: [등록] [삭제] [Excel] [Email] [Print]         │
├─────────────────────────────────────────────────────────┤
│ Data Table                                               │
│ ├─ Header Row (정렬 가능)                                │
│ ├─ Data Rows (hover 효과, 체크박스)                      │
│ └─ Empty State / Loading State                           │
├─────────────────────────────────────────────────────────┤
│ Pagination                                               │
│ └─ << < [1/50] > >> | 페이지당 표시 개수                │
└─────────────────────────────────────────────────────────┘
```

### 코드 예시

```tsx
{/* Page Header */}
<div className="flex items-center justify-between mb-6">
  <div>
    <h1 className="text-2xl font-bold text-text-primary">해상수출 B/L 관리</h1>
    <p className="text-sm text-text-muted mt-1">총 1,234건</p>
  </div>
  <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
    <XIcon className="w-5 h-5 text-text-muted" />
  </button>
</div>

{/* Search Section */}
<div className="bg-navy-700 rounded-xl p-6 mb-4">
  <div className="grid grid-cols-4 gap-4">
    {/* 날짜범위 */}
    <div className="col-span-1">
      <DateRangeButtons />
    </div>
    {/* 상태 필터 */}
    <div className="col-span-1">
      <select className="w-full bg-navy-600 border border-white/10 rounded-xl px-4 py-3 text-text-primary">
        <option value="">전체 상태</option>
      </select>
    </div>
    {/* 검색 입력 */}
    <div className="col-span-2 flex gap-2">
      <input
        type="text"
        placeholder="B/L No, 화주명 검색..."
        className="flex-1 bg-navy-600 border border-white/10 rounded-xl px-4 py-3 text-text-primary"
      />
      <button className="px-6 py-3 bg-gold-500 text-navy-900 rounded-xl font-semibold">
        검색
      </button>
      <button className="px-6 py-3 border border-white/10 text-text-secondary rounded-xl">
        초기화
      </button>
    </div>
  </div>
</div>

{/* Action Bar */}
<div className="flex items-center justify-between mb-4">
  <div className="flex items-center gap-4">
    <span className="text-sm text-text-muted">
      선택: <span className="text-gold-500 font-medium">0건</span>
    </span>
  </div>
  <div className="flex items-center gap-2">
    <button className="px-4 py-2 bg-gold-500 text-navy-900 rounded-lg text-sm font-medium">
      등록
    </button>
    <button className="px-4 py-2 border border-white/10 text-text-secondary rounded-lg text-sm">
      삭제
    </button>
    <button className="px-4 py-2 border border-white/10 text-text-secondary rounded-lg text-sm">
      Excel
    </button>
  </div>
</div>

{/* Data Table */}
<div className="bg-navy-700 rounded-xl overflow-hidden">
  <table className="w-full text-sm">
    {/* ... */}
  </table>
</div>
```

### 테이블 컬럼 우선순위 (물류)

1. 체크박스 (선택)
2. 상태 (뱃지)
3. 문서번호 (B/L No., 부킹번호 등 - 모노스페이스, 링크)
4. 일자 (등록일, 발행일)
5. 거래처 (화주, 콘사이니)
6. 운송정보 (POL/POD, 선명/항차)
7. 화물정보 (컨테이너, 중량)
8. 금액 (우측정렬, 통화표시)

---

## 2. 상세 페이지 (Detail Page)

B/L 상세, 부킹 상세, 스케줄 상세 등에 사용

### 기본 구조

```
┌─────────────────────────────────────────────────────────┐
│ Page Header                                              │
│ ├─ Title: B/L No. MAEU123456789                         │
│ ├─ Status Badge                                          │
│ └─ Actions: [수정] [삭제] [인쇄]                         │
├─────────────────────────────────────────────────────────┤
│ Tab Navigation                                           │
│ └─ [기본정보] [화물정보] [컨테이너] [비용] [서류]        │
├─────────────────────────────────────────────────────────┤
│ Content Area (Tab별 내용)                                │
│ ├─ Section 1: 기본 정보                                  │
│ │   ├─ 2-Column Grid                                     │
│ │   └─ Label: Value pairs                                │
│ ├─ Section 2: 연계 정보                                  │
│ │   └─ Related records table                             │
│ └─ Section 3: 이력                                       │
│     └─ Timeline view                                     │
└─────────────────────────────────────────────────────────┘
```

### 코드 예시

```tsx
{/* Page Header */}
<div className="flex items-center justify-between mb-6">
  <div className="flex items-center gap-4">
    <h1 className="text-2xl font-bold text-text-primary font-mono">MAEU123456789</h1>
    <span className="px-2.5 py-1 rounded-lg bg-success/15 text-success text-xs font-semibold font-mono uppercase">
      발행완료
    </span>
  </div>
  <div className="flex items-center gap-2">
    <button className="px-4 py-2 bg-gold-500 text-navy-900 rounded-lg text-sm font-medium">
      수정
    </button>
    <button className="px-4 py-2 border border-white/10 text-text-secondary rounded-lg text-sm">
      삭제
    </button>
    <button className="px-4 py-2 border border-white/10 text-text-secondary rounded-lg text-sm">
      인쇄
    </button>
  </div>
</div>

{/* Tab Navigation */}
<div className="flex border-b border-white/10 mb-6">
  <button className="px-6 py-3 text-sm font-medium text-gold-500 border-b-2 border-gold-500 -mb-[1px]">
    기본정보
  </button>
  <button className="px-6 py-3 text-sm font-medium text-text-muted hover:text-text-secondary">
    화물정보
  </button>
  <button className="px-6 py-3 text-sm font-medium text-text-muted hover:text-text-secondary">
    컨테이너
  </button>
</div>

{/* Content Section */}
<div className="bg-navy-700 rounded-xl p-6 mb-4">
  <h3 className="text-lg font-semibold text-text-primary mb-4">기본 정보</h3>
  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
    <div>
      <label className="text-xs text-text-muted block mb-1">B/L No.</label>
      <span className="text-text-primary font-mono">MAEU123456789</span>
    </div>
    <div>
      <label className="text-xs text-text-muted block mb-1">발행일자</label>
      <span className="text-text-primary">2026-01-20</span>
    </div>
    {/* More fields */}
  </div>
</div>
```

### 상세 정보 표시 규칙

| 필드 유형 | 스타일 |
|----------|--------|
| 문서번호 | `font-mono`, 강조 |
| 날짜 | `YYYY-MM-DD` 형식 |
| 금액 | `font-mono`, 우측정렬, 천단위 쉼표 |
| 상태 | 뱃지 컴포넌트 |
| 코드값 | 코드 + 명칭 (`KRPUS - 부산항`) |

---

## 3. 등록/수정 페이지 (Form Page)

B/L 등록, 부킹 등록, 스케줄 등록 등에 사용

### 기본 구조

```
┌─────────────────────────────────────────────────────────┐
│ Page Header                                              │
│ ├─ Title: 해상 B/L 등록                                  │
│ └─ Actions: [임시저장] [저장] [취소]                     │
├─────────────────────────────────────────────────────────┤
│ Form Progress (선택적)                                   │
│ └─ Step 1 ─ Step 2 ─ Step 3 ─ Step 4                    │
├─────────────────────────────────────────────────────────┤
│ Form Sections                                            │
│ ├─ Section 1: 기본 정보                                  │
│ │   └─ Input fields in grid layout                       │
│ ├─ Section 2: 거래처 정보                                │
│ │   └─ Shipper, Consignee, Notify                        │
│ ├─ Section 3: 운송 정보                                  │
│ │   └─ Vessel, Voyage, POL, POD                          │
│ └─ Section 4: 화물 정보                                  │
│     └─ Cargo details, Container table                    │
├─────────────────────────────────────────────────────────┤
│ Footer Actions (Sticky)                                  │
│ └─ [취소] [임시저장] [저장]                              │
└─────────────────────────────────────────────────────────┘
```

### 코드 예시

```tsx
{/* Page Header */}
<div className="flex items-center justify-between mb-6">
  <h1 className="text-2xl font-bold text-text-primary">해상수출 B/L 등록</h1>
  <div className="flex items-center gap-2">
    <button className="px-4 py-2 border border-white/10 text-text-secondary rounded-lg text-sm">
      취소
    </button>
    <button className="px-4 py-2 border border-gold-500 text-gold-500 rounded-lg text-sm">
      임시저장
    </button>
    <button className="px-4 py-2 bg-gold-500 text-navy-900 rounded-lg text-sm font-semibold">
      저장
    </button>
  </div>
</div>

{/* Form Section */}
<div className="bg-navy-700 rounded-xl p-6 mb-4">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-lg font-semibold text-text-primary">기본 정보</h3>
    <span className="text-xs text-error">* 필수 입력</span>
  </div>
  <div className="grid grid-cols-3 gap-4">
    {/* B/L No */}
    <div>
      <label className="text-xs font-medium text-text-secondary block mb-1.5">
        B/L No. <span className="text-error">*</span>
      </label>
      <input
        type="text"
        className="w-full px-4 py-3 rounded-xl bg-navy-600 border border-white/10 text-text-primary font-mono
                   focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
        placeholder="B/L 번호 입력"
      />
    </div>
    {/* 발행일자 */}
    <div>
      <label className="text-xs font-medium text-text-secondary block mb-1.5">
        발행일자 <span className="text-error">*</span>
      </label>
      <input
        type="date"
        className="w-full px-4 py-3 rounded-xl bg-navy-600 border border-white/10 text-text-primary
                   focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
      />
    </div>
    {/* 화주 (팝업 검색) */}
    <div>
      <label className="text-xs font-medium text-text-secondary block mb-1.5">
        화주 <span className="text-error">*</span>
      </label>
      <div className="relative">
        <input
          type="text"
          className="w-full pl-4 pr-10 py-3 rounded-xl bg-navy-600 border border-white/10 text-text-primary
                     focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
          placeholder="화주 선택"
          readOnly
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-white/10">
          <SearchIcon className="w-4 h-4 text-text-muted" />
        </button>
      </div>
    </div>
  </div>
</div>

{/* Sticky Footer */}
<div className="fixed bottom-0 left-72 right-0 bg-navy-900/95 backdrop-blur-xl border-t border-white/10 px-8 py-4">
  <div className="flex items-center justify-end gap-3">
    <button className="px-6 py-2.5 border border-white/10 text-text-secondary rounded-xl">
      취소
    </button>
    <button className="px-6 py-2.5 border border-gold-500 text-gold-500 rounded-xl">
      임시저장
    </button>
    <button className="px-6 py-2.5 bg-gradient-to-br from-gold-500 to-gold-600 text-navy-900 rounded-xl font-semibold shadow-lg">
      저장
    </button>
  </div>
</div>
```

### 폼 필드 규칙

| 필드 유형 | 컴포넌트 | 추가 사항 |
|----------|---------|----------|
| 텍스트 | `<input type="text">` | 필수는 `*` 표시 |
| 날짜 | `<input type="date">` | 날짜 선택기 |
| 선택 | `<select>` | 기본값 "선택" |
| 팝업검색 | `<input readonly>` + 검색 버튼 | 모달로 검색 |
| 숫자 | `<input type="text">` | `font-mono`, 우측정렬 |
| 다중입력 | 테이블 형태 | 행 추가/삭제 버튼 |

---

## 4. 대시보드 페이지 (Dashboard)

메인 대시보드, 모듈별 대시보드에 사용

### 기본 구조

```
┌─────────────────────────────────────────────────────────┐
│ KPI Cards (4 columns)                                    │
│ ├─ 진행중 선적 | 금일 부킹 | 금주 매출 | 미처리 건수    │
└─────────────────────────────────────────────────────────┘
┌───────────────────────────────┬─────────────────────────┐
│ Chart Area 1 (2 columns)      │ Chart Area 2           │
│ ├─ 월별 실적 차트             │ ├─ 상태별 분포         │
└───────────────────────────────┴─────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ Map / Timeline                                           │
│ └─ Global Shipment Tracking                              │
└─────────────────────────────────────────────────────────┘
┌───────────────────────────────┬─────────────────────────┐
│ Recent Activity               │ Pending Tasks           │
└───────────────────────────────┴─────────────────────────┘
```

### 코드 예시

```tsx
{/* KPI Cards */}
<div className="grid grid-cols-4 gap-6 mb-6">
  {kpiData.map((kpi, index) => (
    <div key={index}
         className="relative bg-[rgba(22,37,68,0.6)] backdrop-blur-xl border border-white/10 rounded-2xl p-6
                    transition-all duration-300 group
                    hover:border-gold-500/30 hover:-translate-y-1">
      {/* Gold Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl
                      bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500
                      opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10">
          {kpi.icon}
        </div>
        <span className={`text-sm font-mono ${kpi.change >= 0 ? 'text-success' : 'text-error'}`}>
          {kpi.change >= 0 ? '+' : ''}{kpi.change}%
        </span>
      </div>
      <p className="text-sm text-text-secondary mb-1">{kpi.title}</p>
      <p className="text-3xl font-bold text-text-primary font-mono">{kpi.value}</p>
    </div>
  ))}
</div>

{/* Chart Section */}
<div className="grid grid-cols-2 gap-6 mb-6">
  <div className="bg-navy-700 rounded-xl p-6">
    <h3 className="font-semibold text-text-primary mb-4">월별 선적 실적</h3>
    <div className="h-64">
      {/* Chart Component */}
    </div>
  </div>
  <div className="bg-navy-700 rounded-xl p-6">
    <h3 className="font-semibold text-text-primary mb-4">상태별 현황</h3>
    <div className="h-64">
      {/* Chart Component */}
    </div>
  </div>
</div>
```

---

## 5. 모달/팝업 (Modal)

검색 팝업, 확인 다이얼로그 등에 사용

### 기본 구조

```
┌─────────────────────────────────────────────────────────┐
│ Modal Header                                             │
│ ├─ Title                                                 │
│ └─ Close Button (X)                                      │
├─────────────────────────────────────────────────────────┤
│ Modal Body                                               │
│ └─ Content (검색 폼, 목록, 상세 등)                      │
├─────────────────────────────────────────────────────────┤
│ Modal Footer                                             │
│ └─ Actions: [취소] [선택/확인]                           │
└─────────────────────────────────────────────────────────┘
```

### 크기 가이드

| 크기 | 너비 | 용도 |
|-----|------|-----|
| Small | 400px | 확인 다이얼로그, 간단한 폼 |
| Medium | 600px | 검색 팝업, 상세 보기 |
| Large | 900px | 복잡한 폼, 테이블 포함 |
| Full | 90vw | 대형 목록, 복잡한 조회 |

### 코드 예시

```tsx
<div className="fixed inset-0 z-50 flex items-center justify-center">
  {/* Backdrop */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

  {/* Modal */}
  <div className="relative bg-navy-800 rounded-2xl border border-white/10 shadow-2xl
                  w-[600px] max-h-[80vh] overflow-hidden
                  animate-[scaleIn_0.3s_ease-out]">
    {/* Header */}
    <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
      <h3 className="text-lg font-semibold text-text-primary">거래처 검색</h3>
      <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/10">
        <XIcon className="w-5 h-5 text-text-muted" />
      </button>
    </div>

    {/* Body */}
    <div className="p-6 max-h-[60vh] overflow-y-auto">
      {/* Search Form */}
      <div className="flex gap-2 mb-4">
        <input type="text" placeholder="거래처명 검색..."
               className="flex-1 px-4 py-2.5 rounded-xl bg-navy-600 border border-white/10 text-text-primary" />
        <button className="px-4 py-2.5 bg-gold-500 text-navy-900 rounded-xl font-medium">
          검색
        </button>
      </div>
      {/* Results Table */}
      <div className="bg-navy-700 rounded-xl overflow-hidden">
        {/* ... */}
      </div>
    </div>

    {/* Footer */}
    <div className="px-6 py-4 border-t border-white/10 flex justify-end gap-3">
      <button onClick={onClose} className="px-5 py-2.5 text-text-muted hover:text-text-secondary">
        취소
      </button>
      <button className="px-5 py-2.5 bg-gold-500 text-navy-900 rounded-xl font-semibold">
        선택
      </button>
    </div>
  </div>
</div>
```

---

## 반응형 브레이크포인트

| 브레이크포인트 | 너비 | 그리드 컬럼 |
|----------------|------|------------|
| sm | 640px | 1 |
| md | 768px | 2 |
| lg | 1024px | 3 |
| xl | 1280px | 4 |
| 2xl | 1536px | 4+ |

### 반응형 적용 예시

```tsx
{/* KPI Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

{/* Form Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

{/* Chart Grid */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
```
