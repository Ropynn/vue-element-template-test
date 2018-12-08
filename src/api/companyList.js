/*
* @Author: Ropynn
* @Date: 2018-12-08 10:44
* Description :
*/
import request from '@/utils/request'

/**
 * 获取订单列表
 */

export function getCompanyList(data) {
  return request({
    url: '/list/companyList',
    method: 'get',
    params: data
  })
}
