import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#020617', // Slate 950 (Ink Navy Base)
        surface: '#0f172a', // Slate 900 (Card Surface)
        foreground: '#f8fafc', // Slate 50 (Text)
        
        // Brand Accents
        brand: {
          blue: '#3b82f6', // Electric Blue (Primary Action)
          cyan: '#06b6d4', // Cyan (Data/Tech)
          amber: '#f59e0b', // Amber (Value/Human)
          glow: '#60a5fa', // Soft Blue Glow
        },

        // Shadcn UI tokens (mapped to Aura system)
        card: {
          DEFAULT: '#0f172a',
          foreground: '#f8fafc',
        },
        popover: {
          DEFAULT: '#0f172a',
          foreground: '#f8fafc',
        },
        primary: {
          DEFAULT: '#3b82f6',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#1e293b',
          foreground: '#f8fafc',
        },
        muted: {
          DEFAULT: '#1e293b',
          foreground: '#94a3b8',
        },
        accent: {
          DEFAULT: '#1e293b',
          foreground: '#f8fafc',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        border: '#1e293b',
        input: '#1e293b',
        ring: '#3b82f6',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'aura-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'card-glow': 'linear-gradient(180deg, rgba(59, 130, 246, 0.1) 0%, rgba(0, 0, 0, 0) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [tailwindAnimate, typography],
};

export default config;
