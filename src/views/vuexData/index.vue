<template>
  <div class="vuexData">
    <el-table :data="list" style="width: 100%" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column fixed type="index" width="50" label='序号' align="center"></el-table-column>
      <el-table-column prop="createdAt" label="日期" width="160" align="center"></el-table-column>
      <el-table-column prop="person" label="姓名" width="300" align="center"></el-table-column>
      <el-table-column prop="ord_id" label="订单编号" width="300" align="center"></el-table-column>
      <el-table-column prop="hotel_name" label="酒店名称" align="center"></el-table-column>
      <el-table-column prop="mobile" label="手机" width="120" align="center"></el-table-column>
      <el-table-column prop="total_money" label="金额" width="120" align="center"></el-table-column>
      <el-table-column prop="status" label="状态" width="120" align="center"></el-table-column>
    </el-table>
    <div class='page'>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page" :page-sizes="[10, 15, 20]" layout="total, sizes, prev, pager, next, jumper" background :total="count">
      </el-pagination>
    </div>

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
      list: [],
      count: 0,
      searchName: '',
      test: 0
    }
  },
  created() {
    this.num1 = this.aa
    this.getOrderList(this.listQuery)
    if (this.test) {
      console.log(1)
    } else {
      console.log(2)
    }
  },
  methods: {
    // handleChange(value) {
    //   this.$store.commit('SET_NUM', value)
    // },
    // 改变一页请求多少条
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.listQuery.limit = val
      this.getOrderList(this.listQuery)
    },
    // 改变当前页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.listQuery.page = val
      this.getOrderList(this.listQuery)
    },
    // 获取订单列表
    getOrderList(listQuery) {
      getOrderList(listQuery).then(res => {
        console.log(res)
        this.list = res.data
        this.count = res.count
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
  .page {
    margin-top: 20px;
  }

}
</style>

