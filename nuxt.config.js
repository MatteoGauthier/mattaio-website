const glob = require("glob");
// we acquire an array containing the filenames
// in the articles directory
let files = glob.sync("**/*.md", {
  cwd: "articles"
});

// We define a function to trim the '.md' from the filename
// and return the correct path.
// This function will be used later
function getSlugs(post, _) {
  let slug = post.substr(0, post.lastIndexOf("."));
  return `/blog/${slug}`;
}

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
    link: [{ rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"}]
  },
  loading: {
    color: "#4FC08D",
    failedColor: "#bf5050",
    duration: 1500,
    height: '5px'
  },

  css: ["@/assets/master.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  
  transition: {
    name: "page",
    mode: "out-in"
  },
  /*
   ** Nuxt.js modules
   */
  workbox: {
    // Workbox options
    dev:false
   },
  modules: [
    "@nuxtjs/bulma",
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-125389774-1"
      }
    ]
  ],
  generate: {
    routes: function() {
      return files.map(getSlugs);
    }
  },
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.md$/,
        use: ["raw-loader"]
      });
      config.module.rules.unshift({
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "responsive-loader",
          options: {
            // disable: isDev,
            placeholder: true,
            quality: 80,
            placeholderSize: 30,
            name: "img/[name].[hash:hex:7].[width].[ext]",
            adapter: require("responsive-loader/sharp")
          }
        }
      });
      // remove old pattern from the older loader
      config.module.rules.forEach(value => {
        if (String(value.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          // reduce to svg and webp, as other images are handled above
          value.test = /\.(svg|webp)$/;
          // keep the configuration from image-webpack-loader here unchanged
        }
      });
      config.node = {
        fs: "empty",
        glob: "empty"
      };
    },
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
};
