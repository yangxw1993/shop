import Vue from '@/Vue'
import app from './index.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(app),
}).$mount('#app')
