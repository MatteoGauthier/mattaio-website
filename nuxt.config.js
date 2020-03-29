import path from "path";
import glob from "glob";
const otherRoutes = [];
const routeMap = {
  "": "blog/*.md"
};


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
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
      }
    ],
    script: [
      { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
    ]
  },

  generate: {
    routes: otherRoutes.concat(getDynamicPaths(routeMap))
  },

  // router: {
  //   extendRoutes (routes, resolve) {
  //     routes.push({
  //       path: "/cv",
  //       redirect: () => {return "CV_MattèoGauthier_2020_2.1.pdf";}
  //     });
  //   }
  // },

  robots: {
    UserAgent: "*",
    Disallow: "/admin"
  },
  sitemap: {
    hostname: "https://example.com",
    gzip: true,
    exclude: ["/admin/"]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/styles/master.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/tilt" },
    { src: "~/plugins/dummy" },
    { src: "~/plugins/vue-lazyload" },
    { src: "~/plugins/fragment" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    // "@nuxtjs/markdownit",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv"
  ],
  // markdownit: {
  //   injected: true
  // },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ["raw-loader"]
      });
      // config.module.rules.push({
      //   test: /\.md$/,
      //   loader: "frontmatter-markdown-loader",
      //   options: {
      //     vue: true
      //   }
      // });
    }
  }
};

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      const filepathGlob = urlFilepathTable[url]
      let d = glob.sync(filepathGlob, { cwd: "content" }).map(filepath => {
        console.log(`/blog${url}/${path.basename(filepath, ".md")}`);
        return `/blog${url}/${path.basename(filepath, ".md")}`;
      });
      console.log(d)
      return d
    })
  )
}
