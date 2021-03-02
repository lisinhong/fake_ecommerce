export default {
  target: 'static',
  router: {
    base: '/fake_ecommerce/',
  },
  generate: {
    fallback: true,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fake Ecommerce',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A fake ecommerce built with Nuxt.js',
      },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
      { property: 'og:title', content: 'Fake Ecommerce' },
      {
        property: 'og:description',
        content: 'A fake ecommerce built with Nuxt.js',
      },
      { property: 'og:site_name', content: 'Fake Ecommerce' },
      { property: 'og:locale', content: 'zh_TW' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  firebase: {
    config: {
      apiKey: 'AIzaSyBgMHpsB0o4PPtZGcxUhkKSEVzSjb0FYBY',
      authDomain: 'fake-ecommerce.firebaseapp.com',
      projectId: 'fake-ecommerce',
      storageBucket: 'fake-ecommerce.appspot.com',
      messagingSenderId: '386859530081',
      appId: '1:386859530081:web:f3ccc1349a63d2023eb720',
      measurementId: 'G-RXSCL8QFY6',
    },
    services: {
      database: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
