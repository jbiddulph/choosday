export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'choosday',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/scss/tailwind.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss',
  ],
  ssr: true,
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  axios: {
    baseURL: 'https://www.stayinghome.uk/api'
    // baseURL: 'http://choosapi.test/api'
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ['axios', 'vuetify']
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: false, // here should be `false`, as you defined in user endpoint `propertyName`
          autoFetch: true
        },
        // `propertyName` in endpoint was depreacted
        endpoints: {
          login: { url: 'auth/login', method: 'post' },
          logout: { url: 'auth/logout', method: 'post' },
          user: { url: 'auth/profile', method: 'get' },
        }
      }
    }
  },
}
