import { reqCategoryList, reqGetBanner } from '@/api'
export default {
    namespaced: true,
    state: {
        categroylist: [],
        bannerList:[],
    },
    actions: {
        // 请求 三级联动导航接口
        async categroylist(context) {
            let result = await reqCategoryList()
            console.log(result);
            if (result.code == 200) {
                context.commit('CATEGORYLIST', result.data)
            }
        },
        // 请求banner数据接口
        async getBannerList(context) {
            const result = await reqGetBanner();
            if(result.code == 200){
                context.commit('GETBANNERLIST',result.data)
            }
        }
    },
    mutations: {
        CATEGORYLIST(state, categroylist) {
            state.categroylist = categroylist
        },
        GETBANNERLIST(state,bannerList){
            state.bannerList = bannerList
        }
    },
    getters: {}
}