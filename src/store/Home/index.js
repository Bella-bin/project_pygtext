import { reqCategoryList } from '@/api'
export default {
    namespaced: true,
    state: {
        categroylist:[]
    },
    actions: {
        async categroylist(context) {
            let result = await reqCategoryList()
            console.log(result);
            if (result.code == 200) {
                context.commit('CATEGORYLIST', result.data)
            }
        }
    },
    mutations: {
        CATEGORYLIST(state,categroylist){
            state.categroylist = categroylist
        }
    },
    getters: {}
}