import Vue from 'vue'
import Router from 'vue-router'
import Messages from '../components/messages/Messages.vue'
import Friends from '../components/friends/Friends.vue'
import Discover from '../components/discover/Discover.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/messages', name: 'messages', component: Messages},
    {path: '/friends', name: 'friends', component: Friends},
    {path: '/discover', name: 'discover', component: Discover}
  ]
})
export default router
