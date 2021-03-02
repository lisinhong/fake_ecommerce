module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-0': '#d7fff1',
        'custom-100': '#aafcb8',
        'custom-300': '#8cd790',
        'custom-500': '#77af9c',
        'custom-700': '#285943',
      },
    },
  },
  variants: {},
  plugins: [],
}
