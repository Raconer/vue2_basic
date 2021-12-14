import Vue from 'vue'
import router from './router'
import VueSession from 'vue-session'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueSession);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
