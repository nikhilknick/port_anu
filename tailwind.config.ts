import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c9a96e',
          light: '#e2c898',
          dark: '#a8824a',
        },
        cream: '#f5f0e8',
        'warm-white': '#faf7f2',
        charcoal: '#1a1612',
        espresso: '#2e2419',
        taupe: '#8a7660',
        sage: '#7a8c72',
        terracotta: '#c4714a',
        'bg-dark': '#130f0a',
        'bg-card': '#1e1812',
        'bg-card-hover': '#251e16',
        'bg-nav': 'rgba(19,15,10,0.93)',
        'text-primary': '#f0e8d8',
        'text-secondary': '#a8957e',
        'text-muted': '#6b5c47',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '12px',
        lg: '20px',
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.4,0,0.2,1)',
      },
      transitionDuration: {
        'slow': '650ms',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(201,169,110,0.15)',
        'card': '0 8px 40px rgba(0,0,0,0.5)',
        'hover': '0 20px 60px rgba(201,169,110,0.12)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #c9a96e 0%, #e2c898 100%)',
        'gradient-accent': 'linear-gradient(135deg, #c4714a 0%, #e2a882 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1e1812 0%, #130f0a 100%)',
      },
    },
  },
  plugins: [],
}
export default config
