import request from '@/utils/request'

/**
 * 获取用户列表
 */
export function getUserList(data) {
  return request({
    url: '/user/listpage',
    method: 'get',
    params: data
  })
}

/**
 * 删除用户
 */
export function removeUserList(data) {
  return request({
    url: '/user/remove',
    method: 'get',
    params: data
  })
}

/**
 * ??用户列表
 */
export function batchremoveUserList(data) {
  return request({
    url: '/user/batchremove',
    method: 'get',
    params: data
  })
}

/**
 * 添加用户
 */
export function addUserList(data) {
  return request({
    url: '/user/add',
    method: 'get',
    params: data
  })
}

/**
 * 修改用户
 */
export function editUserList(data) {
  return request({
    url: '/user/edit',
    method: 'get',
    params: data
  })
}
