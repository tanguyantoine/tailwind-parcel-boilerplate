const isProd = process.env.NETLIFY === 'true'
const purge = isProd ? ['./src/**/*.html', './src/**/*.js'] : false

module.exports = {
  purge,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
