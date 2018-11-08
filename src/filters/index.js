/*
* @Author: Ropynn
* @Date: 2018-11-05 15:20
* Description :
*/

import Vue from 'vue'

Vue.filter('tuikuanStatus', function(val) {
  if (val.status === '5') {
    return '审核中'
  } else if (val.status === '6') {
    if (val.is_refund) {
      return '同意'
    } else {
      return '拒绝'
    }
  }
})
