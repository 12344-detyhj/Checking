import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './permission'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './mock/index';
import axios from "axios";
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
