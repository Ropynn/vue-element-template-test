/*
* @Author: Ropynn
* @Date: 2018-10-26 11:18
* Description :
*/
import request from '@/utils/request'

/**
 * 获取订单列表
 */

export function getOrderList(data) {
  return request({
    url: '/platform/hotel/get_order_list',
    method: 'get',
    params: data
  })
}
/**
 * 获取订单列表
 */

export function testList(data) {
  return request({
    url: '/transaction/list',
    method: 'get',
    params: data
  })
}
