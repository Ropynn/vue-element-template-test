<template>
  <div class="user">
    <el-table :data="uesrList" style="width: 100%" border fit highlight-current-row>
      <el-table-column fixed type="index" width="50" label='序号' align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180" align="center">
        <!-- <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.addr }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template> -->
      </el-table-column>
      <el-table-column label="出生日期" width="180" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.birth }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="180" align="center">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="180" align="center" :formatter="formatSex">
      </el-table-column>
      <el-table-column prop="addr" label="地址" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center" width="300">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class='page'>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page" :page-sizes="[10, 15, 20]" layout="total, sizes, prev, pager, next, jumper" background :total="count">
      </el-pagination>
    </div>
  </div>

</template>

<script>
import { getUserList, removeUserList, batchremoveUserList, addUserList, editUserList } from '@/api/user'
export default {
  data() {
    return {
      listQuery: {
        limit: 10,
        page: 1
      },
      uesrList: [],
      count: 0
    }
  },
  created() {
    this.getUserList(this.listQuery)
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    // 改变一页请求多少条
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.listQuery.limit = val
      this.getUserList(this.listQuery)
    },
    // 改变当前页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.listQuery.page = val
      this.getUserList(this.listQuery)
    },
    // 获取用户列表
    getUserList(listQuery) {
      getUserList(listQuery).then(res => {
        this.uesrList = res.data
        console.log(this.uesrList)
        this.count = res.count
      })
    },
    // 删除用户
    removeUserList() {
      removeUserList().then(res => {
        console.log(res)
      })
    },
    batchremoveUserList() {
      batchremoveUserList().then(res => {
        console.log(res)
      })
    },
    // 添加用户
    addUserList() {
      addUserList().then(res => {
        console.log(res)
      })
    },
    // 编辑用户
    editUserList() {
      editUserList().then(res => {
        console.log(res)
      })
    },
    formatSex(row) {
      if (row.sex === 0) {
        return '女'
      } else {
        return '男'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  padding: 20px;
  .page {
    margin-top: 20px;
  }
}
</style>

