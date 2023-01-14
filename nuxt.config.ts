// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Blog-Nuxt',
      meta: [
        { name: 'description', content: 'Blog page created in Nuxt 3.' }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Urbanist:wght@100;400;700&display=swap'
        }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
      css: true
    }
  },
  runtimeConfig: {
    accessKey: process.env.NUXT_ACCES_KEY,
    apiUrlBase: process.env.NUXT_API_URL
  },
  css: ['@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/globals.scss";'
        }
      }
    }
  },
  typescript: {
    strict: true
  }

})
