import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// collapse
import {ElCollapseTransition} from 'element-plus'
// fade/zoom
// import 'element-plus/lib/theme-chalk/base.css'

const app = createApp(App)
app.component(ElCollapseTransition.name, ElCollapseTransition)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
