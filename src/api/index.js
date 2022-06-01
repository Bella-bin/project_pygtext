import requests from '@/api/requests'
import mockRequests from '@/api/mockAjax'

// 三级联动get请求接口
export const reqCategoryList  = () => requests({url:'/product/getBaseCategoryList',method:'GET'})

// bannner轮播图的接口
export const reqGetBanner = () => mockRequests({url:'/banner',method:'GET'})

// floor接口
export const reqFoolList = () => mockRequests({url:'/floor',method:'GET'})
