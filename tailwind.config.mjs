/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#f1c40f',
        accent: '#e74c3c',
      },
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      minWidth: {
        mobile: '320px',
      },
    },
  },
  plugins: [],
}