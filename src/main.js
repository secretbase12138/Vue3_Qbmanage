import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from "./router"
import store from "./store"
import '@/assets/styles/index.scss'  //全局样式

// collapse
import {ElCollapseTransition} from 'element-plus'
// fade/zoom
// import 'element-plus/lib/theme-chalk/base.css'

const app = createApp(App)
app.component(ElCollapseTransition.name, ElCollapseTransition)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router)
app.use(store)
app.mount('#app')
