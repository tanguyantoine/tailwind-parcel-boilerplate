const isProd = process.env.NODE_ENV === 'production'
const purge = false // TODO: fix it for release
// const purge = isProd ? ['./src/**/*.html', './src/**/*.js'] : []

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
