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
          '2xl': '102px',
        },
      },
      colors:{
        primary: '#181B68',
        secondary: '#4C82FE',
        thridly: '#171717',
        fourly: '#6F706F',
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        md: '14px',
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
        'hero-home-placeir': "url('assets/images/hero-home-placeir.png')",
        'hero-explore-placeir': "url('assets/images/hero-explore-placeir.webp')",
        'explore-maps-placeir': "url('assets/map-indo.svg')",
        'newsletter-placeir': "url('assets/images/bg-newsletter-placeir.png')",
        'frame-one-placeir': "url('assets/images/bg-frameOne-placeir.png')",
        'frame-two-placeir': "url('assets/images/bg-frameTwo-placeir.png')",
      }
    },
  },
  plugins: [],
};