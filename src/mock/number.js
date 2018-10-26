import Mock from 'mockjs'

const listNum = Mock.mock({
  number: 1
})

export default {
  listNum: () => {
    return {
      code: 20000,
      data: listNum
    }
  }
}
