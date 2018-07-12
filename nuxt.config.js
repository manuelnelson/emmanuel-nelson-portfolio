/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const base = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/emmanuel-nelson-portfolio/' : '';
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: base
  }
} : {}

module.exports = {
  /*
  ** Headers of the page
  */
  ...routerBase,
  head: {
    title: 'Emmanuel Nelson',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The unostentatious portfolio of Emmanuel Nelson' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${base}/favicon.ico` },
      { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css?family=Noto+Sans:300,400,700|Rasa:300,400,700&subset=latin,latin-ext' }
    ]
  },
  css:[
    '~/assets/main.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
