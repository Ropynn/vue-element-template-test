import Mock from 'mockjs'
import { parseQueryString } from '../utils'

// const Random = Mock.Random
const count = 100

const data = Mock.mock({
  'data|100': [{
    'id|+1': 1,
    'ord_id': /[a-z]{2}\d{9}/,
    'hotel_name': '@city' + '@area' + '大酒店',
    'person': '@name',
    'mobile': /^1[34578]\d{8}/,
    'total_money|150-200': 160,
    'status|0-3': 1,
    'createdAt': '@date("yyyy-MM-dd HH:mm:ss")'
  }],
  'count': count,
  'code': 20000
})

const tongjiData = Mock.mock({
  'data|100': [{
    'id|+1': 1,
    'total_money|100-150': 120,
    'pay_count|2-10': 3,
    'tuikuan_money|100-150': 120,
    'tuikuan_count|2-10': 3,
    'createdAt': '@date("yyyy-MM-dd HH:mm:ss")'
  }],
  'count': count,
  'code': 20000,
  'pay_total_money|800-1000': 800,
  'pay_count|50-100': 50,
  'tuikuan_money|800-1000': 800,
  'tuikuan_count|50-100': 50
})

// 订单列表 接口地址 /platform/hotel/get_order_list
Mock.mock(/\/platform\/hotel\/get_order_list/, 'get', function(options) {
  const page = Number(parseQueryString(options.url).page)
  const limit = Number(parseQueryString(options.url).limit)
  const response = { 'data': [...data.data.slice((page - 1) * limit, page * limit)], 'count': count, 'code': 20000 }
  return response
})

// 订单统计列表 接口地址 /platform/hotel/get_orderManage_list
Mock.mock(/\/platform\/hotel\/get_orderManage_list/, 'get', function(options) {
  const page = Number(parseQueryString(options.url).page)
  const limit = Number(parseQueryString(options.url).limit)
  const response = {
    'data': [...tongjiData.data.slice((page - 1) * limit, page * limit)],
    'count': count,
    'code': 20000,
    'pay_total_money': tongjiData.pay_total_money,
    'pay_count': tongjiData.pay_count,
    'tuikuan_money': tongjiData.tuikuan_money,
    'tuikuan_count': tongjiData.tuikuan_count
  }
  return response
})

