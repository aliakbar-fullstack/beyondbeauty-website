/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FBF8F1',
          100: '#F5EEDD',
          200: '#EBDDBB',
          300: '#E0C995',
          400: '#D4AF65',
          500: '#C29C4E',
          600: '#A3803A',
          700: '#856430',
          800: '#6A4E26',
          900: '#4F3A1C',
        },
        secondary: {
          50: '#F7F5F3',
          100: '#EDE9E4',
          200: '#D9D2C9',
          300: '#B9AEA2',
          400: '#8F8377',
          500: '#6E6358',
          600: '#564C43',
          700: '#3F3730',
          800: '#2C2621',
          900: '#1A1714',
        },
        accent: {
          50: '#FAF7F2',
          100: '#F3EDE3',
          200: '#E9E0D0',
          300: '#DCCDB2',
        },
        success: {
          50: '#EFF8F1',
          500: '#3E8A5A',
          700: '#2B6642',
        },
        warning: {
          50: '#FDF6E7',
          500: '#C98A1B',
          700: '#8F5F0E',
        },
        error: {
          50: '#FCEFEF',
          500: '#B94A48',
          700: '#8E3331',
        },
        neutral: {
          0: '#FFFFFF',
          50: '#FAF7F2',
          100: '#F3EFE9',
          200: '#E6E0D7',
          300: '#CFC7BC',
          400: '#A39A8E',
          500: '#7A7268',
          600: '#5C554D',
          700: '#433D37',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(44, 38, 33, 0.18)',
        lift: '0 24px 48px -20px rgba(44, 38, 33, 0.28)',
        gold: '0 12px 30px -10px rgba(212, 175, 101, 0.55)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slow-zoom': 'slowZoom 14s ease-out both',
        'bounce-soft': 'bounceSoft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
