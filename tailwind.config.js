/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '1rem',
          md: '1rem',
          lg: '1rem',
          xl: '1rem',
          '2xl': '5rem',
        },
      },
      colors:{
        primary: '#181B68',
        secondary: '#4C82FE',
        textPrimary: '#171717',
        textSecondary: '#6F706F',
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        base: '14px',
        lg: '16px',
        xl: '18px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '28px',
        '5xl': '32px',
        '6xl': '42px',
        '7xl': '52px',
        '8xl': '68px',
      },
      backgroundImage: {
        'hero-placeir': "url('assets/images/hero-placeir.png')",
        'newssteller-placeir': "url('assets/images/newssteller-placeir.png')",
        'frame-one': "url('assets/images/bg-frame-1.png')",
      }
    },
  },
  plugins: [],
};