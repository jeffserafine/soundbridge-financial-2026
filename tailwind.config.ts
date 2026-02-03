/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class" as const,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // MAPPED BRAND COLORS
        // "forest" is now mapped to SoundBridge NAVY
        forest: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',  // Standard Navy
          800: '#243b53',  // Deep Navy
          900: '#102a43',  // Darkest Navy (Primary)
          950: '#061626',  // Almost Black Blue
        },
        // "lime" is now mapped to SoundBridge GOLD
        lime: {
          50: '#fdfdf2',
          100: '#fcfcd5',
          200: '#faf7aa',
          300: '#f7ef75',
          400: '#f0e137',
          500: '#d6c311',  // Rich Gold
          600: '#b09d09',  // Dark Gold
          700: '#8a7908',
          800: '#695b09',
          900: '#564b0e',
          950: '#322b05',
        },
        stone: {
           50: '#fafaf9',
           100: '#f5f5f4',
           200: '#e7e5e4',
           300: '#d6d3d1',
           400: '#a8a29e',
           500: '#78716c',
           600: '#57534e',
           700: '#44403c',
           800: '#292524',
           900: '#1c1917',
           950: '#0c0a09',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};

export default config;
