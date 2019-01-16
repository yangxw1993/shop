import Vue from 'vue'
import config from '@/config'
import iView from 'iview';
/* import importFilter from '@/filter'
importFilter(Vue) */

/* import '@/styles/normalize.css'
import '@/styles/common.less' */
// 使用iview组件
import 'iview/dist/styles/iview.css';
Vue.use(iView);
/* 
  全局注册业务组件
*/
import MyHeader from '@/components/header/Header.vue'
import MyFooter from '@/components/footer/Footer.vue'
Vue.component('my-header', MyHeader)
Vue.component('my-footer', MyFooter)
Vue.prototype.$config = config

export default Vue;
