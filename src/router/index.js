import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 对push he  replace 进行重写
// 保存原来的原型对象ush
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.push
// 重新push
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,() => {},() => {})
    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,() => {},() => {})
    }
}

// 引入路由组件
import LoginRoute from '@/pages/Login/LoginRoute'
import RegisterRoute from '@/pages/Register/RegisterRoute'
import SearchRoute from '@/pages/Search/SearchRoute'
import HomeRoute from '@/pages/Home/HomeRoute'
// 创建路由器实例
export default new VueRouter({
    // 配置路由
    routes: [
        {
            path: '/login',
            component: LoginRoute,
            meta:{isAuth:false},
        },
        {
            path: '/register',
            component: RegisterRoute,
            meta:{isAuth:false}
        },
        {
            name:'search',
            path: '/search/:keywords?',
            component: SearchRoute,
            meta:{isAuth:true},
            props(route){
                return{keywords:route.params.keywords,k:route.query.k}
            }
        },

        {
            path: '/home',
            component: HomeRoute,
            meta:{isAuth:true}
        },
        //重定向 访问主页时自动跳转到home页面
        {
            path: '/',
            redirect: '/home'
        }

    ]
})
