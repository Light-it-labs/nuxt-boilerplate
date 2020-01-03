import getRoutes from './utils/getRoutes.js';
require('dotenv').config();

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
    ['@nuxtjs/dotenv', { path: './' }],
    '@nuxtjs/sitemap'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  sitemap: {
    routes() {
      return getRoutes();
    },
    hostname: process.env.APP_URL,
    path: '/sitemap.xml',
    gzip: true,
    generate: false,
  },

  axios: {
    baseURL: process.env.API_URL
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
    },
  },
}
