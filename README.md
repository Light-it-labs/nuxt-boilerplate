# Nuxt Template
Nuxt template base is a boilerplate Nuxt project. It follows the community best practices in terms of standards, security and maintainability, integrating a variety of testing and code quality tools.

## Installed packages
- [@nuxt/auth](https://auth.nuxtjs.org/) for users authentication.
- [@nuxt/axios](https://axios.nuxtjs.org/) for HTTP requests.
- [@nuxt/dotenv](https://github.com/nuxt-community/dotenv-module) for load variables from .env file.
- [@nuxt/sentry](https://github.com/nuxt-community/sentry-module) for error logging through Sentry.
- [@nuxt/sitemap](https://github.com/nuxt-community/sitemap-module) for automatically generate sitemap.xml.
- [@nuxtjs/tailwindcss](https://github.com/nuxt-community/tailwindcss-module) low-level CSS framework.

## Build Setup

``` bash
# create .env configuration file
$ cp .env.example .env

# install dependencies
$ npm install

# serve for development with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
``` 
