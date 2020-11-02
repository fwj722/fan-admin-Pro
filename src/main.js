import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
// import Cookies from 'js-cookie'
import * as filters from './filters'
import './icons' // icon
import '@/styles/index.scss' // global css
import './styles/element-variables.scss'
import './permission'
// 注册全局文件
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
