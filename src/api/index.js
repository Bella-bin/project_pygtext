import requests from '@/api/requests'

// 三级联动get请求接口

export const reqCategoryList  = () => requests({url:'/product/getBaseCategoryList',method:'GET'})
