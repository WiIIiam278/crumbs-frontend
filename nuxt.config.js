// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@nuxtjs/google-fonts'],
    // Fonts
    googleFonts: {
        families: {
            'Nunito': [400, 700]
        }
    },

    runtimeConfig: {
        // https://v3.nuxtjs.org/docs/usage/runtime-config
        public: {
            apiEndpoint: process.env.API_ENDPOINT
        }
    },

    app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1', 
          title: 'Crumbs - Order & Offer leftovers',
          meta: [
            { 
                name: 'description', 
                content: 'A web app that lets people order other people\'s leftovers and rewards others for their generosity.'
            }
          ],
        }
      }
})
