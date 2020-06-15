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
    title: "Mattèo Gauthier personal website - Mattèo.dev",
    meta: [
      { charset: "utf-8" },
      {
        name: "title",
        content: "Mattèo Gauthier personal website - Mattèo.dev"
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://xn--matto-7ra.dev/" }, // here it is just ngrok for my test
      {
        property: "og:title",
        content: "Mattèo Gauthier personal website"
      },
      {
        property: "og:description",
        content:
          "Novice web developer, learning, writing, open-sourcer. Working with web technologies like Vue, React. Find out some blog-posts, tutorials, etc.."
      },
      {
        property: "og:image",
        content:
          "https://cdn.jsdelivr.net/gh/MattixNow/StaticHost@master/assets/og.png"
      },
      {
        property: "twitter:image",
        content:
          "https://cdn.jsdelivr.net/gh/MattixNow/StaticHost@master/assets/og-twitter.png"
      },
      {
        property: "twitter:card",
        content: "summary"
      },
      {
        property: "twitter:title",
        content: "Mattèo Gauthier personal website"
      },
      {
        property: "twitter:url",
        content: "https://xn--matto-7ra.dev/"
      },
      {
        property: "twitter:description",
        content:
          "Novice web developer, learning, writing, open-sourcer. Working with web technologies like Vue, React. Find out some blog-posts, tutorials, etc.."
      },

      {
        name: "keywords",
        content:
          "Mattèo Gauthier, Mattèo, semoule.fr, semoule, mattaio-website, personal website, Javascript, French, Français, NodeJS, blog, mattèo.dev"
      },
      { name: "msapplication-TileColor", content: "#2b5797" },
      { name: "theme-color", content: "#fff" },
      {
        hid: "description",
        name: "description",
        content:
          "Novice web developer, learning, writing, open-sourcer. Working with web technologies like Vue, React. Find out some blog-posts, tutorials, etc.."
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
    hostname: "https://mattèo.dev",
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
  css: [{ src: "~/assets/styles/master.scss", lang: "scss" }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/tilt" },
    { src: "~/plugins/dummy" },
    { src: "~/plugins/vue-lazyload" },
    { src: "~/plugins/fragment" },
    { src: "~/plugins/lightbox", ssr: false },
    { src: "~/plugins/ytb", ssr: false },
    { src: "~/plugins/snackbar", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-125389774-1"
      }
    ],
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt/components"
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
    "@nuxtjs/dotenv",
    "nuxt-user-agent",
    "portal-vue/nuxt"
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
