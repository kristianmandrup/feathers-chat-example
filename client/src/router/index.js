
import VueRouter from 'vue-router'
import Vue from 'vue'
import Index from '../components/Hello'
import Messages from '../components/Messages'

Vue.use(VueRouter)

const routes = [
  { path: '/index', component: Index, name: 'index' },
  { path: '/messages', component: Messages, name: 'messages' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
