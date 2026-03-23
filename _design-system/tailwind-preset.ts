import type { Config } from "tailwindcss";

/**
 * Marimbas Home — Tailwind CSS Preset
 *
 * Use as a preset in any app's tailwind.config.ts:
 *   presets: [marimbasPreset]
 *
 * This is the SINGLE SOURCE OF TRUTH for the Marimbas visual identity.
 * Do NOT define brand colors/fonts locally in app configs.
 */
const marimbasPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        // ── Core Brand ──
        'deep-forest': '#1B3A1A',
        'chiapas-green': {
          DEFAULT: '#3D6B35',
          light: '#4A7E40',
        },
        'amber-warm': '#C9A96E',
        'terracotta': {
          DEFAULT: '#C67B5C',
          light: '#D4927A',
        },
        'adobe': '#8B6F47',

        // ── Neutrals ──
        'linen': '#F5F0E8',
        'sand': '#E8DFD1',
        'cream': '#FAF7F2',
        'charcoal': {
          DEFAULT: '#2C2C2C',
          light: '#4A4A4A',
        },

        // ── Accents ──
        'gold': {
          DEFAULT: '#FFD700',
          muted: '#D4A847',
        },
        'sage': '#96CEB4',
        'teal': '#4ECDC4',
        'coral': '#E17055',
        'slate': {
          DEFAULT: '#4A6FA5',
          light: '#5E83B9',
          dark: '#3B5A87',
        },

        // ── Dark Mode surfaces ──
        'dark': {
          bg: '#0d1117',
          card: '#161b22',
          border: '#30363d',
          text: '#e6edf3',
          muted: '#8b949e',
          accent: '#5c85ff',
        },

        // ── Semantic (Tailwind-friendly) ──
        'brand': {
          primary: '#3D6B35',
          'primary-hover': '#4A7E40',
          secondary: '#C67B5C',
          'secondary-hover': '#D4927A',
          accent: '#C9A96E',
          success: '#96CEB4',
          warning: '#FFD700',
          danger: '#E17055',
          info: '#4ECDC4',
        },
      },

      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'DM Serif Display', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },

      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h2': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2' }],
        'h3': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3' }],
      },

      borderRadius: {
        'card': '12px',
        'btn': '8px',
      },

      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.06)',
        'elevated': '0 8px 30px rgba(0,0,0,0.12)',
        'nav': '0 1px 12px rgba(0,0,0,0.04)',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      maxWidth: {
        'marimbas': '1200px',
        'marimbas-wide': '1440px',
        'marimbas-narrow': '768px',
      },

      spacing: {
        'nav': '72px',
      },
    },
  },
};

export default marimbasPreset;
