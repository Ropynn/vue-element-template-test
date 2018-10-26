<template>
  <div class="vuexData">
    <template>
      <el-table :data="list" style="width: 100%" element-loading-text="Loading" border fit highlight-current-row>
        <el-table-column fixed prop="createdAt" label="日期" width="160" align="center"></el-table-column>
        <el-table-column prop="person" label="姓名" width="300" align="center"></el-table-column>
        <el-table-column prop="hotel_name" label="酒店名称" align="center"></el-table-column>
        <el-table-column prop="mobile" label="手机" width="120" align="center"></el-table-column>
        <el-table-column prop="total_money" label="金额" width="120" align="center"></el-table-column>
        <el-table-column prop="status" label="状态" width="120" align="center"></el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getOrderList } from '@/api/test'
export default {
  computed: {
    ...mapGetters(['aa'])
  },
  data() {
    return {
      num1: Number,
      listQuery: {
        limit: 10,
        page: 1
      },
      list: []
    }
  },
  created() {
    this.num1 = this.aa
    this.getOrderList()
  },
  methods: {
    handleChange(value) {
      console.log(value)
      this.$store.commit('SET_NUM', value)
    },
    getOrderList() {
      getOrderList(this.listQuery).then(res => {
        console.log(res)
        this.list = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.vuexData {
  padding: 20px;
  box-sizing: border-box;
}
</style>

