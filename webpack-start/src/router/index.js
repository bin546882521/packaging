import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../pages/Home.vue'
import Home2 from '../pages/Home2.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    { path: '/', component: Home},
    { path: '/me', component: Home2}
  ],
})

export default router