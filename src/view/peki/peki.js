import Vue from '@/Vue'
import app from './peki.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(app),
}).$mount('#app')
