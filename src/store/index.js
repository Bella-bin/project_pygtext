import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import Home from '@/store/Home'
// 创建实例

export default new Vuex.Store({
    modules:{
        Home,
    }
})