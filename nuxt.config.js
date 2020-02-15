
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: "https://cdn.jsdelivr.net/npm/three@latest/build/three.min.js" },
      {
        src:
          "https://cdn.jsdelivr.net/npm/three@latest/examples/js/controls/OrbitControls.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["assets/styles/master.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  tailwindcss: {
    configPath: "~/config/tailwind.config.js",
    cssPath: "~/assets/styles/tailwind.css",
    purgeCSSInDev: false
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "nuxt-webfontloader",
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources"
  ],

  webfontloader: {
    google: {
      families: [
        "Prosto+One&display=swap",
        "Poppins:300,400,500&display=swap"
        // "Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
      ] //Loads Lato font with weights 400 and 700
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    vendor: ["three"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
