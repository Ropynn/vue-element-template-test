import Mock from 'mockjs'
// import loginAPI from './login'

// Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
// Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
// Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

// export default Mock

import './orderManage'

import transactionAPI from './test'
import testNumAPI from './number'
import tableAPI from './user'
import companyApi from './qichacha'

Mock.mock(/\/transaction\/list/, 'get', transactionAPI.getList)
Mock.mock(/\/list\/getList/, 'get', testNumAPI.listNum)
Mock.mock(/\/list\/companyList/, 'get', companyApi.companyList)

// 用户相关
Mock.mock(/\/user\/listpage/, 'get', tableAPI.getUserList)
Mock.mock(/\/user\/remove/, 'get', tableAPI.deleteUser)
Mock.mock(/\/user\/batchremove/, 'get', tableAPI.batchremove)
Mock.mock(/\/user\/add/, 'get', tableAPI.createUser)
Mock.mock(/\/user\/edit/, 'get', tableAPI.updateUser)
