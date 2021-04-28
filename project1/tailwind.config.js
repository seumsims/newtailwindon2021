module.exports = {
  mode: 'jit',
  purge: [
    'dist/**/*.html',
    'src/**/*.{js,jsx,ts,tsx,vue}',
  
],
  
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
