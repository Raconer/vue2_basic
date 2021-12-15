import Vue from 'vue'
import router from './router'
import VueSession from 'vue-session'
import App from './App.vue'
import store from './store';

Vue.config.productionTip = false
// Session
Vue.use(VueSession);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
