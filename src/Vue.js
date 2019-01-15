import Vue from 'vue'
import config from '@/config'
import iView from 'iview';
/* import importFilter from '@/filter'
importFilter(Vue) */

/* import '@/styles/normalize.css'
import '@/styles/common.less' */
import 'iview/dist/styles/iview.css';

Vue.prototype.$config = config
Vue.use(iView);
export default Vue;
