import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon

import './mock'
import '@/permission' // permission control
import './directive'
import './filters'
import VueDND from 'awe-dnd'

Vue.use(VueDND)
const bus = new Vue()

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    bus
  },
  router,
  store,
  render: h => h(App)
})
