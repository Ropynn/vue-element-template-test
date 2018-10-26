import { getNumberList } from '@/api/number'

const myNum = {
  state: {
    mockNum: 5
  },

  mutations: {
    SET_NUM: (state, mockNum) => {
      state.mockNum = mockNum
    }
  },

  actions: {
    // 获取数值
    getNum({ commit }) {
      return new Promise((resolve, reject) => {
        getNumberList().then(response => {
          const data = response.data
          commit('SET_NUM', data.number)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}

export default myNum
