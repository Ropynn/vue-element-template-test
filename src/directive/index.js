/*
* @Author: Ropynn
* @Date: 2018-11-05 15:20
* Description :
*/

import Vue from 'vue'

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function(el) {
    // 聚焦元素
    el.focus()
  }
})

Vue.directive('change', {
  bind(el, bindings) {
    console.log('指令已经绑定到元素了')
    console.log(el)
    console.log(bindings)
    // 准备将传递来的参数
    // 显示在调用该指令的元素的innerHTML
    el.innerHTML = bindings.value
  },
  update(el, bindings) {
    console.log('指令的数据有所变化')
    console.log(el)
    console.log(bindings)
    el.innerHTML = bindings.value
    if (bindings.value === 5) {
      console.log(' it is a test')
    }
  },
  unbind() {
    console.log('解除绑定了')
  }
})
