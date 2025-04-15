import type { Config } from 'tailwindcss'
import { heroui } from '@heroui/react'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          50: '#F3F3F3',
          100: '#ECECE8',
          200: '#C5C5C6',
          300: '#949694',
          400: '#877E75',
          500: '#3E3A38',
        },
      },
      backgroundImage: {
        'index-services': 'url(/graphics/images/index/services.webp)',
      },
    },
    fontSize: {
      xs: '0.69rem',
      sm: '0.88rem',
      base: '0.94rem',
      lg: '1.38rem',
      xl: '1.81rem',
      '2xl': '2.44rem',
      '3xl': '3rem',
    },
    fontFamily: {
      gothic: ['"Century Gothic Paneuropean"', 'sans-serif'],
    },
    animation: {
      'loading-logo': 'loading-svg 0.5s ease-in-out backwards 1.5s',
      'loading-flite': 'loading-path 0.5s ease-in-out backwards',
      'loading-watch': 'loading-path 0.5s ease-in-out backwards 0.5s',
      'loading-bar': 'loading-bar 1.5s ease-in-out backwards',
    },
    keyframes: {
      'loading-logo': {
        '0%': { width: '32vh' },
        '50%': { width: '32vh' },
        '100%': { width: '16vh' },
      },
      'loading-svg': {
        '0%': { transform: 'translateY(750%)', width: '32vh' },
        '100%': { transform: 'translateY(0)', width: '16vh' },
      },
      'loading-path': {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(-3%)' },
      },
      'loading-bar': {
        '0%': { width: '0%' },
        '100%': { width: '100%' },
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
}
export default config
