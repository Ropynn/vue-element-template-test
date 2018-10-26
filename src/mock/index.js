import Mock from 'mockjs'
// import loginAPI from './login'

// Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
// Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
// Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

// export default Mock

import './orderManage'

import transactionAPI from './test'
import testNumAPI from './number'

Mock.mock(/\/transaction\/list/, 'get', transactionAPI.getList)
Mock.mock(/\/list\/getList/, 'get', testNumAPI.listNum)
