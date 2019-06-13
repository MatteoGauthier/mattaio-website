
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/tippy.js@4/themes/light-border.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#eee' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/OverBuefy.scss',
    "@/assets/master.scss",
    
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    ['nuxt-buefy', { 
      defaultIconPack: 'fas', 
      materialDesignIconsHRef: "https://use.fontawesome.com/releases/v5.9.0/css/all.css" 
    }],
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
