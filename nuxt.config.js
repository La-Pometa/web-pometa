export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: 'La Pometa Agencia',
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=5.0,user-scalable=yes',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#bfd5c2' },
        ...i18nHead.meta,
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
        ...i18nHead.link,
      ],
    }
  },

  loading: {
    color: '#bfd5c2',
    height: '2px',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/theme.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/skeletonLoader',
    '~/plugins/content/',
    '~/plugins/fontawesome',
    '~/plugins/filters',
    '~/plugins/vue-snap',
    '~/plugins/vue-lazyload',
    '~/plugins/vue-slick-carousel',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],

  i18n: {
    baseUrl: process.env.BASE_URL || 'http://new.lapometa.com',
    langDir: './locales/',
    locales: [
      { code: 'es', iso: 'es-ES', file: 'es/index.js', dir: 'ltr' },
      { code: 'ca', iso: 'ca', file: 'ca/index.js', dir: 'ltr' },
    ],
    defaultLocale: 'es',
    detectBrowserLanguage: false,
    useCookie: false,
    parsePages: false,
    pages: {
      proyectos: {
        ca: '/projectes',
      },
      contacto: {
        ca: '/contacte',
      },
      'departamento-marketing-externo': {
        ca: '/departament-marqueting-extern',
      },
      'desayuna-con-manzanas': {
        ca: '/esmorza-amb-pomes',
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    extend(config, { isClient }) {
      // Include the compiler version of Vue so that wp-content works
      // eslint-disable-next-line dot-notation
      config.resolve.alias['vue'] = 'vue/dist/vue.esm.js'
      /*       const isProd = process.env.NODE_ENV === 'production'
      if (isProd && isClient) {
        config.optimization.splitChunks.maxSize = 49856 // 244 Kib
      } */
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        preserveLineBreaks: false,
        collapseWhitespace: true,
      },
    },
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  env: {
    API_ENDPOINT: process.env.WP_API_ENDPOINT,
    SITE_NAME: process.env.SITE_NAME,
  },
}
