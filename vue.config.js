const {defineConfig} = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//设置是否在开发环境下每次保存代码时都启用 eslint验证。
  configureWebpack: {
    plugins: [
      //ElementPlus自动导入
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
})
