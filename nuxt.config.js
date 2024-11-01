const path = require('path');

export default {
  // mode: 'spa',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  generate: {
    dir: 'doc', // 这里设置您希望的目录名称
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'niumei',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  router: {
    // base: process.env.NODE_ENV === 'dev' ? '/' : './'
  },
  alias: {
    // 例如，设置一个别名 'images' 指向项目中的 assets/images 目录
    // 'components': fileURLToPath(new URL('./components', import.meta.url)),
    // '@': path.resolve(__dirname, './src'),
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    extend(config, { isDev }) {
      console.log('isDev ' + isDev);
      // 修改输出路径
      // config.output.publicPath = isDev ? '/' : './_nuxt/' // 注意以斜杠开头和结尾

      // 添加其他自定义 webpack 配置
    }
  }
}
