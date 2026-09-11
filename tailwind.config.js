/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#042C53',
          medium: '#0C447C',
          light: '#15578F',
        },
        amber: {
          DEFAULT: '#EF9F27',
          dark: '#412402',
        },
        ink: {
          DEFAULT: '#042C53',
          body: '#1A1A17',
          muted: '#5F5E5A',
        },
        line: '#E5E5E0',
        surface: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      letterSpacing: {
        label: '0.22em',
      },
    },
  },
  plugins: [],
};
