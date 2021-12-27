import filedSet from '../components/filedSet.vue'

//Vue的插件模式需要暴露一个install的方法
//Vue.use()
const install = (Vue) => {
   Vue.component(filedSet.name,filedSet)
}

export default install