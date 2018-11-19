// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import store from './store'
import axios from 'axios'
import Muse from './muse-ui.config'
import VueTouch from 'vue-touch'

Vue.use(Muse)
Vue.use(VueAxios, axios)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

store.dispatch('getAllData', axios)
router.beforeEach((to, from, next) => {
  // console.log(to.name)
  store.commit('CHANGE_NAV_TITLE', to.name)
  next()
})
router.replace('/messages')
