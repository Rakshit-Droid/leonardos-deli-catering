/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FBF7EE',
          100: '#F5F0E6',
          200: '#ECE5D5',
          300: '#DED3BB',
        },
        espresso: {
          900: '#1C140E',
          800: '#2A1F18',
          700: '#3A2B20',
          600: '#52402F',
          500: '#6E5744',
          400: '#8A7361',
          300: '#A89483',
        },
        olive: {
          700: '#434D36',
          600: '#5E6B4C',
          500: '#7C8A66',
          400: '#9DA885',
        },
        tomato: {
          600: '#B5462E',
          500: '#C55638',
          400: '#D67350',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      boxShadow: {
        diffuse: '0 20px 40px -15px rgba(42, 31, 24, 0.08)',
        card: '0 30px 60px -30px rgba(42, 31, 24, 0.15), 0 8px 20px -8px rgba(42, 31, 24, 0.06)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.6)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
    },
  },
  plugins: [],
};
