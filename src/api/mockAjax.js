import axios from "axios";
// 引入进度条插件
import nprogress from "nprogress";
// 引入进度条样式
import 'nprogress/nprogress.css'
// 对axios进行二次fengzhuang
const requests = axios.create({
    baseURL:'/mock',
    timeout:5000
})

// 请求拦截器
requests.interceptors.request.use(config => {
    // 请求之前做鞋什么
    // 开启进度条
    nprogress.start()
    return config
},error => {
    // 请求失败做些什么
    console.log('请求失败'+error);
    return Promise.reject(error)
})

// 响应拦截器
requests.interceptors.response.use(res => {
    // 关闭进度条
    nprogress.done()
    return res.data
},error => {
    console.log('响应失败'+error);
    return Promise.reject(new Error('fail'))
})

export default requests