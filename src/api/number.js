/*
* @Author: Ropynn
* @Date: 2018-10-26 11:18
* Description :
*/
import request from '@/utils/request'

/**
 * 获取订单列表
 */

export function getNumberList(data) {
  return request({
    url: '/list/getList',
    method: 'get',
    params: data
  })
}

