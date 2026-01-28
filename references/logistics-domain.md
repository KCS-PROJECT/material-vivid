# FMS Logistics Domain

**Material Vivid × Industrial Maritime Luxury**

FMS 물류 플랫폼의 도메인 용어, 상태 뱃지, UI 텍스트 규칙.

## 물류 도메인 용어

### 문서 유형

| 약어 | 전체명 | 한글 | 설명 |
|------|--------|------|------|
| B/L | Bill of Lading | 선하증권 | 해상운송 화물 수령증 |
| AWB | Air Waybill | 항공화물운송장 | 항공운송 화물 수령증 |
| S/O | Shipping Order | 선적오더 | 화주의 선적 지시서 |
| D/O | Delivery Order | 인도지시서 | 화물 인도 지시서 |
| A/N | Arrival Notice | 도착통지 | 화물 도착 알림 |
| S/R | Shipping Request | 선적요청 | 포워더에 선적 요청 |
| S/N | Shipping Notice | 선적통지 | 선적 완료 통지 |
| S/A | Shipping Advice | 선적안내 | 선적 상세 안내 |
| M/F | Manifest | 적하목록 | 선박 화물 목록 |
| C/I | Commercial Invoice | 상업송장 | 거래 송장 |
| P/L | Packing List | 포장명세서 | 화물 포장 명세 |
| POD | Proof of Delivery | 인수증빙 | 화물 인수 증명 |
| GR | Goods Receipt | 화물수령 | 화물 수령 확인 |

### B/L 관련 용어

| 약어 | 전체명 | 한글 |
|------|--------|------|
| MBL | Master Bill of Lading | 선사B/L |
| HBL | House Bill of Lading | 포워더B/L |
| MAWB | Master Air Waybill | 항공사AWB |
| HAWB | House Air Waybill | 포워더AWB |
| ORI | Original | 정본 |
| SWB | Sea Waybill | 해상화물운송장 |
| TLX | Telex Release | 전신양도 |

### 운송 관련 용어

| 약어 | 전체명 | 한글 |
|------|--------|------|
| ETD | Estimated Time of Departure | 출발예정일시 |
| ETA | Estimated Time of Arrival | 도착예정일시 |
| ATD | Actual Time of Departure | 실제출발일시 |
| ATA | Actual Time of Arrival | 실제도착일시 |
| POL | Port of Loading | 선적항 |
| POD | Port of Discharge | 양하항 |
| T/S | Transshipment | 환적 |

### 화물/컨테이너 용어

| 약어 | 전체명 | 한글 |
|------|--------|------|
| TEU | Twenty-foot Equivalent Unit | 20피트 컨테이너 단위 |
| FEU | Forty-foot Equivalent Unit | 40피트 컨테이너 단위 |
| FCL | Full Container Load | 컨테이너 풀적재 |
| LCL | Less than Container Load | 컨테이너 혼적 |
| CBM | Cubic Meter | 입방미터 |
| R/T | Revenue Ton | 운임톤 |
| CLP | Container Load Plan | 컨테이너적입계획 |
| VGM | Verified Gross Mass | 컨테이너검증중량 |
| DG | Dangerous Goods | 위험물 |

---

## 카테고리별 테마 색상

### 해상수출 (Sea Export) - Blue

```
Primary: #3B82F6 (Blue-500)
Light:   #DBEAFE (Blue-100)
Dark:    #1E40AF (Blue-800)
Muted:   rgba(59, 130, 246, 0.15)
```

**상태 뱃지**:

| 상태 | 배경색 | 텍스트색 | 레이블 |
|------|--------|----------|--------|
| REQUEST | `#DBEAFE` | `#2563EB` | 부킹요청 |
| CONFIRM | `#D1FAE5` | `#059669` | 부킹확정 |
| CANCEL | `#FEE2E2` | `#DC2626` | 부킹취소 |
| DRAFT | `#F3F4F6` | `#6B7280` | 작성중 |
| ISSUED | `#D1FAE5` | `#059669` | 발행완료 |
| SURRENDERED | `#DBEAFE` | `#2563EB` | Surrendered |

### 해상수입 (Sea Import) - Green

```
Primary: #10B981 (Emerald-500)
Light:   #D1FAE5 (Emerald-100)
Dark:    #065F46 (Emerald-800)
Muted:   rgba(16, 185, 129, 0.15)
```

**상태 뱃지**:

| 상태 | 배경색 | 텍스트색 | 레이블 |
|------|--------|----------|--------|
| ARRIVAL | `#D1FAE5` | `#059669` | 도착 |
| CUSTOMS | `#FEF3C7` | `#D97706` | 통관중 |
| CLEARED | `#D1FAE5` | `#059669` | 통관완료 |
| DELIVERED | `#DBEAFE` | `#2563EB` | 인도완료 |
| PENDING | `#F3F4F6` | `#6B7280` | 대기 |

### 항공수출 (Air Export) - Purple

```
Primary: #8B5CF6 (Violet-500)
Light:   #EDE9FE (Violet-100)
Dark:    #5B21B6 (Violet-800)
Muted:   rgba(139, 92, 246, 0.15)
```

**상태 뱃지**:

| 상태 | 배경색 | 텍스트색 | 레이블 |
|------|--------|----------|--------|
| BOOKED | `#EDE9FE` | `#7C3AED` | 부킹완료 |
| DEPARTED | `#D1FAE5` | `#059669` | 출발 |
| IN_TRANSIT | `#DBEAFE` | `#2563EB` | 운송중 |
| ARRIVED | `#D1FAE5` | `#059669` | 도착 |
| IRRE | `#FEE2E2` | `#DC2626` | 사고/예외 |

### 항공수입 (Air Import) - Amber

```
Primary: #F59E0B (Amber-500)
Light:   #FEF3C7 (Amber-100)
Dark:    #B45309 (Amber-800)
Muted:   rgba(245, 158, 11, 0.15)
```

**상태 뱃지**:

| 상태 | 배경색 | 텍스트색 | 레이블 |
|------|--------|----------|--------|
| SCHEDULED | `#FEF3C7` | `#D97706` | 예정 |
| ARRIVED | `#D1FAE5` | `#059669` | 도착 |
| CUSTOMS | `#FEF3C7` | `#D97706` | 통관중 |
| RELEASED | `#D1FAE5` | `#059669` | 반출완료 |

### OMS - Pink

```
Primary: #EC4899 (Pink-500)
Light:   #FCE7F3 (Pink-100)
Dark:    #9D174D (Pink-800)
Muted:   rgba(236, 72, 153, 0.15)
```

**상태 뱃지**:

| 상태 | 배경색 | 텍스트색 | 레이블 |
|------|--------|----------|--------|
| NEW | `#FCE7F3` | `#DB2777` | 신규 |
| PROCESSING | `#DBEAFE` | `#2563EB` | 처리중 |
| COMPLETED | `#D1FAE5` | `#059669` | 완료 |
| CANCELLED | `#FEE2E2` | `#DC2626` | 취소 |

### 공통 (Common) - Gray

```
Primary: #64748B (Slate-500)
Light:   #F1F5F9 (Slate-100)
Dark:    #334155 (Slate-800)
Muted:   rgba(100, 116, 139, 0.15)
```

---

## UI 텍스트 작성 규칙

### DO (권장)

```
✅ "선적 완료"
✅ "B/L 3건 등록됨"
✅ "저장"
✅ "취소"
✅ "검색"
✅ "삭제"
✅ "등록"
✅ "수정"
✅ "확인"
```

### DON'T (지양)

```
❌ "선적이 완료되었습니다!" (느낌표, 장황함)
❌ "3건의 B/L이 등록됨" (조사 불필요)
❌ "저장하기" (~하기 형태)
❌ "취소하기"
❌ "검색하기"
❌ "삭제하기"
❌ "등록하기"
❌ "수정하기"
❌ "확인하기"
```

### 버튼 레이블 규칙

| 카테고리 | Primary 버튼 | Secondary 버튼 |
|----------|-------------|---------------|
| 저장 관련 | 저장, 등록, 확정 | 임시저장 |
| 삭제 관련 | 삭제 | 취소 |
| 검색 관련 | 검색 | 초기화 |
| 전송 관련 | 전송, 발송 | 미리보기 |
| 인쇄 관련 | 인쇄, 출력 | PDF저장 |

---

## 데이터 시각화 규칙

### 숫자 표기

```css
.number-display {
  font-family: 'JetBrains Mono', monospace;
  font-variant-numeric: tabular-nums;
  font-feature-settings: 'tnum' on, 'lnum' on;
  letter-spacing: -0.02em;
}
```

| 유형 | 형식 | 예시 |
|------|------|------|
| 금액 | 천단위 쉼표 + 통화 | `₩1,234,567` |
| 수량 | 천단위 쉼표 | `1,234 TEU` |
| 퍼센트 | 소수점 1자리 | `12.5%` |
| 중량 | 소수점 2자리 | `1,234.56 KG` |
| 부피 | 소수점 2자리 | `123.45 CBM` |

### 날짜/시간 표기

| 유형 | 형식 | 예시 |
|------|------|------|
| 일자 | YYYY-MM-DD | `2026-01-20` |
| 시간 | HH:mm | `14:30` |
| 일시 | YYYY-MM-DD HH:mm | `2026-01-20 14:30` |
| 기간 | YYYY-MM-DD ~ YYYY-MM-DD | `2026-01-20 ~ 2026-02-05` |

### 코드값 표기

포트코드, 국가코드 등은 코드 + 명칭 함께 표기

```
KRPUS - 부산항
USLGB - 롱비치항
KR - 대한민국
```

---

## 특수 표시 아이콘

| 구분 | 아이콘 | 색상 | 설명 |
|------|--------|------|------|
| 위험물(DG) | ⚠️ 경고 | `#EF4444` (Red) | 위험물 화물 |
| 냉동(REEFER) | ❄️ 눈송이 | `#3B82F6` (Blue) | 냉동 컨테이너 |
| 중량초과 | ⚡ 경고 | `#F59E0B` (Amber) | 중량 제한 초과 |
| 긴급 | 🔥 불꽃 | `#EF4444` (Red) | 긴급 처리 필요 |
| VIP | ⭐ 별 | `#D4A853` (Gold) | VIP 고객 |

---

## 상태 흐름 다이어그램

### 해상수출 부킹

```
[작성중] → [부킹요청] → [부킹확정] → [선적진행]
   ↓
[부킹취소]
```

### 해상수입 통관

```
[도착] → [접수] → [심사] → [검사] → [수리] → [통관완료] → [인도완료]
                     ↓
                  [보류]
```

### 항공 AWB

```
[작성중] → [부킹] → [출발] → [운송중] → [도착] → [통관] → [인도]
                       ↓
                    [IRRE]
```

---

## 뱃지 코드 예시

```tsx
// 상태 뱃지 컴포넌트
interface BadgeProps {
  status: string;
  domain?: 'sea-export' | 'sea-import' | 'air-export' | 'air-import' | 'oms';
}

const statusConfig = {
  // 공통
  DRAFT: { bg: '#F3F4F6', text: '#6B7280', label: '작성중' },
  PENDING: { bg: '#F3F4F6', text: '#6B7280', label: '대기' },
  CANCEL: { bg: '#FEE2E2', text: '#DC2626', label: '취소' },

  // 해상수출
  REQUEST: { bg: '#DBEAFE', text: '#2563EB', label: '부킹요청' },
  CONFIRM: { bg: '#D1FAE5', text: '#059669', label: '부킹확정' },
  ISSUED: { bg: '#D1FAE5', text: '#059669', label: '발행완료' },

  // 해상수입
  ARRIVAL: { bg: '#D1FAE5', text: '#059669', label: '도착' },
  CUSTOMS: { bg: '#FEF3C7', text: '#D97706', label: '통관중' },
  CLEARED: { bg: '#D1FAE5', text: '#059669', label: '통관완료' },
  DELIVERED: { bg: '#DBEAFE', text: '#2563EB', label: '인도완료' },

  // 항공
  BOOKED: { bg: '#EDE9FE', text: '#7C3AED', label: '부킹완료' },
  DEPARTED: { bg: '#D1FAE5', text: '#059669', label: '출발' },
  IN_TRANSIT: { bg: '#DBEAFE', text: '#2563EB', label: '운송중' },
  ARRIVED: { bg: '#D1FAE5', text: '#059669', label: '도착' },
  IRRE: { bg: '#FEE2E2', text: '#DC2626', label: '사고/예외' },

  // OMS
  NEW: { bg: '#FCE7F3', text: '#DB2777', label: '신규' },
  PROCESSING: { bg: '#DBEAFE', text: '#2563EB', label: '처리중' },
  COMPLETED: { bg: '#D1FAE5', text: '#059669', label: '완료' },
};

function StatusBadge({ status }: BadgeProps) {
  const config = statusConfig[status] || statusConfig.PENDING;

  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold font-mono uppercase"
      style={{ backgroundColor: config.bg, color: config.text }}
    >
      {config.label}
    </span>
  );
}
```
