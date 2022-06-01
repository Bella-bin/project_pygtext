import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router/index'
// 引入store
import store from '@/store'

// 引入mockServer
import '@/mock/mockServer'

Vue.config.productionTip = false
// 引入组件
import TypeNav from '@/components/TypeNav/TypeNav'
// 三级联动注册为全局组件
Vue.component(TypeNav.name,TypeNav)

// 发起请求
import {reqCategoryList} from '@/api'
reqCategoryList()
// 引入swiper样式
import 'swiper/css/swiper.min.css';

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
