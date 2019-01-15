import Vue from 'vue'
import Index from './view/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(Index),
}).$mount('#app')
