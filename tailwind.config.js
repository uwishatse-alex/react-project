/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 12px 30px -18px rgba(15, 23, 42, 0.28)',
        premium: '0 24px 45px -24px rgba(15, 23, 42, 0.35)',
        amberGlow: '0 10px 28px -12px rgba(245, 158, 11, 0.45)',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
