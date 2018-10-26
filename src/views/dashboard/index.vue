<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name:{{name}}</div>
    <div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getOrderList, testList } from '@/api/test'

export default {
  name: 'dashboard',
  data() {
    return {
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  created() {
    this.test()
    this.test1()
    this.test2()
  },
  methods: {
    test() {
      getOrderList(this.listQuery).then(res => {
        // console.log(res)
      })
    },
    test1() {
      // console.log(2)
      testList().then(res => {
        // console.log(res)
      })
    },
    test2() {
      this.$store.dispatch('getNum').then(res => {
        console.log('111')
        // console.log(this.number, 'aa')
      })
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles',
      'number'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
