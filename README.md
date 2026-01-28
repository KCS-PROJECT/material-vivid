# Material Vivid Design System

**FMS 물류 플랫폼 전용 Claude Code 디자인 스킬**

![Material Vivid](https://img.shields.io/badge/Material%20Vivid-Navy%20%2B%20Gold-0A1628?style=for-the-badge&labelColor=D4A853)
![Claude Code](https://img.shields.io/badge/Claude%20Code-Plugin-5A67D8?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## Overview

Material Vivid는 물류(Logistics) 도메인에 특화된 프리미엄 다크 테마 디자인 시스템입니다.

**Material Vivid × Industrial Maritime Luxury** 컨셉으로, 물류 산업의 전문성과 신뢰감을 현대적이고 세련된 디자인으로 표현합니다.

### Key Features

- **Deep Navy + Warm Gold** 색상 테마
- **Glass Morphism** 기반 UI 컴포넌트
- **물류 도메인별 색상 시스템** (해상수출/수입, 항공수출/수입, OMS)
- **상태 뱃지 및 KPI 카드** 물류 업무에 최적화
- **반응형 레이아웃** 패턴

## Screenshots

### Color Palette
```
Navy Palette          Gold Accent
━━━━━━━━━━━━━━━━━    ━━━━━━━━━━━━━━━
#030712 (950)        #F5D98A (300)
#0A1628 (900) ◀ Base #E8C468 (400)
#0F1D32 (800)        #D4A853 (500) ◀ Primary
#162544 (700)        #B8923F (600)
#1E3A5F (600)        #9A7B35 (700)
```

### Logistics Domain Colors
```
해상수출 ━━ #3B82F6 (Blue)
해상수입 ━━ #10B981 (Green)
항공수출 ━━ #8B5CF6 (Purple)
항공수입 ━━ #F59E0B (Amber)
OMS     ━━ #EC4899 (Pink)
```

## Installation

### Option 1: Clone from GitHub

```bash
# Clone to your project's .claude directory
git clone https://github.com/ahja777/material-vivid.git .claude/material-vivid
```

### Option 2: Manual Installation

1. Download or clone this repository
2. Copy to your project's `.claude/` directory
3. Add reference in your `CLAUDE.md`:

```markdown
## Design System
@.claude/material-vivid/SKILL.md
```

### Option 3: Global Installation

```bash
# Install to global Claude plugins directory
git clone https://github.com/ahja777/material-vivid.git ~/.claude/plugins/material-vivid
```

## Usage

### Automatic Activation

스킬은 다음 키워드가 포함된 요청에서 자동으로 활성화됩니다:

- `FMS`, `물류`, `포워딩`, `로지스틱스`
- `대시보드`, `B/L`, `AWB`, `부킹`, `선적`
- `해상수출`, `해상수입`, `항공수출`, `항공수입`
- `OMS`, `견적`, `스케줄`, `통관`

### Example Prompts

```
"FMS 대시보드 UI 만들어줘"
→ Material Vivid 스타일의 KPI 카드, 차트, 테이블 생성

"해상수출 B/L 목록 페이지 디자인해줘"
→ Navy+Gold 테마, Glass Card, 상태 뱃지 적용

"항공수입 AWB 상세 화면 만들어줘"
→ 도메인별 색상, 탭 네비게이션, 폼 요소 적용
```

## File Structure

```
material-vivid/
├── .claude-plugin/
│   └── plugin.json          # Plugin manifest
├── assets/
│   └── tailwind-config.js   # Tailwind CSS configuration
├── references/
│   ├── color-system.md      # Color palette & CSS variables
│   ├── components.md        # UI component library
│   ├── motion-patterns.md   # Animation patterns
│   ├── page-patterns.md     # Page layout templates
│   └── logistics-domain.md  # Domain-specific UI rules
├── SKILL.md                 # Main skill definition
├── README.md
└── LICENSE
```

## Tech Stack

| Category | Technology |
|----------|------------|
| **Fonts** | Outfit (Display), JetBrains Mono (Monospace) |
| **CSS** | Tailwind CSS with custom config |
| **Icons** | Heroicons (Outline style) |
| **Effects** | Glass Morphism, Backdrop Blur, Noise Texture |

## Components Included

### Layout
- Sidebar Navigation
- Top Header with Glass Effect
- Main Content Area

### Cards
- Glass Card (기본)
- Stat Card (KPI)
- Section Card (폼/목록 컨테이너)

### Form Elements
- Text Input with Gold focus
- Select Dropdown
- Search Input
- Lookup Input (팝업 검색)
- Checkbox

### Buttons
- Filled (Gold Gradient)
- Outline
- Ghost
- Icon Button
- Small Button

### Data Display
- Data Table with sorting
- Status Badges (상태별)
- Tab Navigation
- Pagination

### Feedback
- Skeleton Loading
- Gold Shimmer
- Spinner
- Empty State
- Modal/Dialog

## Design Principles

| Principle | Description |
|-----------|-------------|
| **Clarity First** | 복잡한 물류 데이터를 명확하게 전달 |
| **Visual Hierarchy** | 정보의 중요도에 따른 시각적 계층 |
| **Consistency** | 일관된 컴포넌트와 패턴 사용 |
| **Accessibility** | 충분한 명도 대비와 직관적 인터랙션 |
| **Performance** | 최적화된 애니메이션과 렌더링 |

## Prohibited Items

다음은 사용하지 않습니다:

| Category | Prohibited |
|----------|------------|
| **Fonts** | Roboto, Noto Sans, 굴림, 돋움, 맑은고딕 |
| **Colors** | 순수 흰색 `#FFFFFF`, 순수 검정 `#000000` |
| **Style** | 평면 단색 배경, 라이트 테마 기본 |
| **UI Text** | "~하기" 형태, 이모지, 느낌표 남용 |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- **KCS** - *Initial work* - [ahja777](https://github.com/ahja777)

## Acknowledgments

- Inspired by Material Design 3
- Glass Morphism trends in modern UI
- Maritime & Logistics industry aesthetics
