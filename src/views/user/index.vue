<template>
  <div class="user">
    <div class="search-input">
      <el-input placeholder="请输入名字" v-model="searchName" clearable style="marginRight: 20px; width: 150px"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
      <el-button type="primary" icon="el-icon-edit" @click="handleAddUser">新增</el-button>
    </div>
    <div class="user-content">
      <el-table :data="uesrList" style="width: 100%" border fit highlight-current-row>
        <el-table-column fixed type="index" width="50" label='序号' align="center"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180" align="center">
        </el-table-column>
        <el-table-column label="出生日期" width="180" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.birth }}</span>
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
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class='page'>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page" :page-sizes="[10, 15, 20]" layout="total, sizes, prev, pager, next, jumper" background :total="count">
        </el-pagination>
      </div>
    </div>
    <div class="dialog">
      <el-dialog title="添加用户" :visible.sync="dialogFormVisible" @close="handleClose">
        <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-form">
          <el-form-item label="姓名" prop="name" placeholder="请输入您的姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="出生日期" required>
            <el-col :span="11">
              <el-form-item prop="birth">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.birth" style="width: 100%;" value-format="yyyy-MM-dd"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-select v-model="form.sex" placeholder="请选择您的性别">
              <el-option label="男" :value=1></el-option>
              <el-option label="女" :value=0></el-option>
            </el-select>
          </el-form-item>
          <!-- <el-form-item label="省市区" prop="addr">
            <el-cascader :options="cityInfo" size="medium" v-model="form.addr" placeholder="省市区" change-on-select clearable style="width:200px"></el-cascader>
          </el-form-item> -->
          <el-form-item label="省市区" prop="addr" placeholder="省市区">
            <el-input v-model="form.addr"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age" placeholder="请输入您的年龄">
            <el-input v-model.number="form.age"></el-input>
          </el-form-item>
          <el-form-item label="id" prop="id" placeholder="请输入您的id">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="dialogFormVisible=false">取消</el-button>
            <el-button type="primary" @click="submitForm('form')">确定</el-button>
            <!-- <el-button @click="resetForm('form')">重置</el-button> -->
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>

</template>

<script>
import { getUserList, removeUserList, batchremoveUserList, addUserList, editUserList } from '@/api/user'
import cityInfo from '@/plugins/city-data'
import { parseAddr } from '@/config/parseAddr'
export default {
  data() {
    return {
      cityInfo,
      listQuery: {
        limit: 10,
        page: 1
      },
      uesrList: [],
      count: 0,
      searchName: '',
      dialogFormVisible: false,
      formLabelWidth: '100px',
      isEdit: false,
      form: {
        name: '',
        birth: '',
        sex: '',
        age: 0,
        id: '',
        addr1: [],
        addr: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, message: '至少3个字符以上', trigger: 'blur' }
        ],
        birth: [
          { required: true, message: '请选择日期', trigger: 'change' }
        ],
        sex: [
          { required: true, message: '请选择您的性别', trigger: 'change' }
        ],
        age: [
          { type: 'number', required: true, message: '请输入正确的年龄', trigger: 'blur' }
        ],
        id: [
          { required: true, message: '请输入您的id', trigger: 'change' }
        ],
        addr: [
          { required: true, message: '请选择省市区', trigger: 'change' }
        ]
      }
    }
  },
  created() {
    this.getUserList(this.listQuery)
  },

  methods: {
    // 编辑
    handleEdit(row) {
      this.isEdit = true
      this.dialogFormVisible = true
      this.form.id = row.id
      this.form.addr = row.addr
      this.form.sex = row.sex
      this.form.age = row.age
      this.form.birth = row.birth
      this.form.name = row.name
    },
    // 删除
    handleDelete(row) {
      removeUserList({ id: row.id }).then(res => {
        console.log(res)
        this.$message({
          message: res.data.message,
          type: 'success'
        })
        this.getUserList(this.listQuery)
      })
    },
    // 改变一页请求多少条
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getUserList(this.listQuery)
    },
    // 改变当前页
    handleCurrentChange(val) {
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
    // 批量删除
    batchremoveUserList() {
      batchremoveUserList().then(res => {
        console.log(res)
      })
    },
    // 添加用户
    handleAddUser() {
      this.form.id = ''
      this.form.addr = ''
      this.form.sex = ''
      this.form.age = ''
      this.form.birth = ''
      this.form.name = ''
      this.isEdit = false
      this.dialogFormVisible = true
    },
    // 格式化
    formatSex(row) {
      if (row.sex === 0) {
        return '女'
      } else {
        return '男'
      }
    },
    // 搜索
    handleSearch() {
      if (this.searchName) {
        getUserList({ name: this.searchName }).then(res => {
          this.uesrList = res.data
          this.count = res.count
        })
      } else {
        this.getUserList(this.listQuery)
      }
    },
    // 提交
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          if (!this.isEdit) {
            this.form.addr = parseAddr(this.form.addr)
            addUserList(this.form).then(res => {
              this.getUserList(this.listQuery)
            }).catch(err => {
              console.log(err)
            })
            this.$message({
              message: '添加成功',
              type: 'success'
            })
          } else {
            // 编辑
            console.log(this.form, 'aa')
            editUserList(this.form).then(res => {
              this.getUserList(this.listQuery)
            })
            console.log()
          }
        } else {
          console.log('error submit!!')
          return false
        }
        this.dialogFormVisible = !this.dialogFormVisible
      })
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    // 弹窗关闭
    handleClose() {
      if (!this.isEdit) {
        this.form.id = ''
        this.form.addr = ''
        this.form.sex = ''
        this.form.age = ''
        this.form.birth = ''
        this.form.name = ''
      }
      this.$refs.form.clearValidate()
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
  .search-input {
    margin-bottom: 20px;
    display: flex;
  }
}
</style>

