import Vue from 'vue'
import App from './App'
import router from './router'
import './styless/base.css'
import './styless/test.css'
import './styless/common.less'
const aa = process.env.NODE_ENV
console.log(aa);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')