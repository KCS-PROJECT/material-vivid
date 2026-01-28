/**
 * Material Vivid - Tailwind CSS Configuration
 * FMS Edition: Deep Navy + Warm Gold Theme
 */

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      // ===== 색상 시스템 =====
      colors: {
        // Navy Palette (Core Background)
        navy: {
          950: "#030712",  // Darkest
          900: "#0A1628",  // Base background
          800: "#0F1D32",  // Slightly lighter
          700: "#162544",  // Elevated surfaces
          600: "#1E3A5F",  // Card background
          500: "#2563EB",  // Primary Blue
        },
        // Gold Palette (Accent)
        gold: {
          300: "#F5D98A",  // Light gold (highlight)
          400: "#E8C468",  // Hover state
          500: "#D4A853",  // Primary accent
          600: "#B8923F",  // Gradient end
          700: "#9A7B35",  // Dark gold
        },
        // Surface System
        surface: {
          base: "var(--surface-base, #0A1628)",
          elevated: "var(--surface-elevated, rgba(22, 37, 68, 0.7))",
          card: "var(--surface-card, rgba(30, 58, 95, 0.4))",
          hover: "var(--surface-hover, rgba(37, 99, 235, 0.08))",
          active: "var(--surface-active, rgba(37, 99, 235, 0.12))",
        },
        // Text Hierarchy
        text: {
          primary: "var(--text-primary, #F8FAFC)",
          secondary: "var(--text-secondary, #94A3B8)",
          muted: "var(--text-muted, #64748B)",
          accent: "var(--text-accent, #D4A853)",
        },
        // Semantic Colors
        success: {
          DEFAULT: "#10B981",
          muted: "rgba(16, 185, 129, 0.15)",
        },
        warning: {
          DEFAULT: "#F59E0B",
          muted: "rgba(245, 158, 11, 0.15)",
        },
        error: {
          DEFAULT: "#EF4444",
          muted: "rgba(239, 68, 68, 0.15)",
        },
        info: {
          DEFAULT: "#3B82F6",
          muted: "rgba(59, 130, 246, 0.15)",
        },
        // Logistics Categories
        logistics: {
          "sea-export": "#3B82F6",      // Blue
          "sea-import": "#10B981",      // Green
          "air-export": "#8B5CF6",      // Purple
          "air-import": "#F59E0B",      // Amber
          "oms": "#EC4899",             // Pink
          "common": "#64748B",          // Gray
        },
      },

      // ===== 폰트 =====
      fontFamily: {
        display: ["'Outfit'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        body: ["'Outfit'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'JetBrains Mono'", "'SF Mono'", "monospace"],
      },

      // ===== 테두리 반경 =====
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      // ===== 그림자 (FMS Style) =====
      boxShadow: {
        "card": "0 4px 24px rgba(0, 0, 0, 0.3)",
        "glow": "0 0 40px rgba(212, 168, 83, 0.15)",
        "glow-lg": "0 0 60px rgba(212, 168, 83, 0.2)",
        "gold-sm": "0 4px 16px rgba(212, 168, 83, 0.3)",
        "gold-md": "0 8px 24px rgba(212, 168, 83, 0.4)",
        "elevation-1": "0 1px 2px rgba(0, 0, 0, 0.3)",
        "elevation-2": "0 2px 4px rgba(0, 0, 0, 0.3)",
        "elevation-3": "0 4px 8px rgba(0, 0, 0, 0.3)",
        "elevation-4": "0 8px 16px rgba(0, 0, 0, 0.3)",
        "elevation-5": "0 16px 32px rgba(0, 0, 0, 0.3)",
      },

      // ===== 애니메이션 =====
      animation: {
        "fade-in": "fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-in-up": "fadeInUp 0.3s cubic-bezier(0.05, 0.7, 0.1, 1) forwards",
        "fade-in-scale": "fadeInScale 0.3s cubic-bezier(0.05, 0.7, 0.1, 1) forwards",
        "slide-in-left": "slideInLeft 0.3s cubic-bezier(0.05, 0.7, 0.1, 1) forwards",
        "slide-up": "slideUp 0.4s cubic-bezier(0.05, 0.7, 0.1, 1) forwards",
        "scale-in": "scaleIn 0.3s cubic-bezier(0.05, 0.7, 0.1, 1) forwards",
        "shimmer": "shimmer 2s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "spin-slow": "spin 1.5s linear infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 168, 83, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(212, 168, 83, 0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },

      // ===== 트랜지션 타이밍 =====
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
        "decelerate": "cubic-bezier(0, 0, 0.2, 1)",
        "accelerate": "cubic-bezier(0.4, 0, 1, 1)",
        "emphasized": "cubic-bezier(0.2, 0, 0, 1)",
        "emphasized-decelerate": "cubic-bezier(0.05, 0.7, 0.1, 1)",
        "emphasized-accelerate": "cubic-bezier(0.3, 0, 0.8, 0.15)",
      },

      // ===== 트랜지션 지속시간 =====
      transitionDuration: {
        "fast": "150ms",
        "normal": "300ms",
        "slow": "500ms",
      },

      // ===== 스페이싱 =====
      spacing: {
        "18": "4.5rem",
        "72": "18rem",    // Sidebar width
        "80": "20rem",
        "88": "22rem",
      },

      // ===== 폰트 사이즈 =====
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],  // 11px
      },

      // ===== 백드롭 블러 =====
      backdropBlur: {
        "xs": "2px",
        "3xl": "64px",
      },

      // ===== z-index =====
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
    },
  },
  plugins: [],
};
