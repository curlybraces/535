const pkg = require("./package");
const axios = require("axios");

const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = {
  mode: "spa",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"}
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "/img/favicon.png"},
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Exo+2"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {color: "#fff"},

  /*
   ** Global CSS
   */
  css: ["~/assets/style/app.styl"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/vuetify",
    {src: "~/plugins/fullpage", ssr: false},
    {src: "@/plugins/vue-particles", ssr: false},
    {src: "~/plugins/vue-3d-model.js", ssr: false},
    {src: "~/plugins/vue-meta.js", ssr: false}
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/apollo",
    "@nuxtjs/markdownit"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "http://sesbackend.thenameisvery.com/graphql",
        httpLinkOptions: {
          credentials: "same-origin"
        }
      }
    }
  },
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: ["vuetify/lib"],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
