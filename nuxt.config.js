export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  target: 'static', // default is 'server'
  head: {
    title: '晋城职业技术学院508工作室',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '508工作室|晋城职业技术学院' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'http://www.51jcjgzy.cn/public/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/moment',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: "http://www.51jcjgzy.cn"
    // proxy: true
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
}