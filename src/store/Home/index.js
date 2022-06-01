import { reqCategoryList, reqGetBanner ,reqFoolList} from '@/api'
export default {
    namespaced: true,
    state: {
        categroylist: [],
        bannerList:[],
        floorList:[],
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
        },
        // 请求
        async getFloorList(context){
            const result = await reqFoolList()
            if(result.code == 200) {
                context.commit('GETFLOORLIST',result.data)
            }
        }
    },
    mutations: {
        CATEGORYLIST(state, categroylist) {
            state.categroylist = categroylist
        },
        GETBANNERLIST(state,bannerList){
            state.bannerList = bannerList
        },
        GETFLOORLIST(state,floorList) {
            state.floorList = floorList
        }
    },
    getters: {}
}