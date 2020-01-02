export default {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: 'blue',
    height: '1px',
  },

  css: [

  ],

  plugins: [

  ],

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv',
  ],

  axios: {
    baseURL: 'http://localhost:8000/api'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.token' },
          user: { url: 'user', method: 'get', propertyName: 'data.user' },
          logout: { url:'logout', method: 'post' }
        }
      }
    }
  },

  build: {
    extend (config, ctx) {
    }
  }
}
