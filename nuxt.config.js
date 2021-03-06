module.exports = {
  /*
  ** Headers of the page
  */
  mode: 'spa',

  head: {
    title: '株式会社Autumn オータム',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '株式会社Autumnオータムは新鮮な映像体験を京都から発信するクリエイティブ映像製作会社です。',
      },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      // OGP
      { property: 'og:title', content: '株式会社Autumn オータム' },
      {
        property: 'og:description',
        content:
          'Autumnはあなたとともに本質的な課題と向き合い、「創作の喜び」を共有するクリエイティブチームです。',
      },
      { property: 'og:url', content: 'https://autumn-kyoto.co.jp' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:image',
        content: 'https://autumn-kyoto.co.jp/og-image.jpg',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
      {
        rel: 'shortcut icon',
        type: 'image/vnd.microsoft.icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/apple-touch-icon.png',
      },
      { rel: 'apple-touch-startup-image', href: '/apple-touch-icon.png' },
    ],
  },
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
    * Nuxt ^2.0.0 build error 回避のため
    * https://qiita.com/m1ul24/items/efd2b9af1954cce6bcc7
    */
    // extend (config, { isDev, isClient }) {
    extend(config) {
      // if (isDev && isClient) {
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },

  plugins: [{ src: '~/plugins/routerOption.js', ssr: false }],

  css: [
    'assets/css/myreset.scss',
    'assets/css/animate.css',
    'assets/css/common.scss',
  ],
}
