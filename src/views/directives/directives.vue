<template>
    <div>
      <p>{{msg}}</p>
      <!-- 准备实现需求：
      在h1标签上面，加上一个按钮，当点击按钮时候，对count实现一次
      自增操作，当count等于5的时候，在控制台输出‘it is a test’
      -->
      <!--<button @click="handleClick">clickMe</button>-->
      <!--<h1 v-if="count < 6" v-change="count">it is a custom directive</h1>-->
      <!--<input v-focus>-->
      <p>{{value}}</p>
    </div>
</template>

<script>
  export default {
    name: 'directives',
    data() {
      return {
        msg: 'Hello Vue',
        count: 0,
        value: 0
      }
    },
    created() {
      this.test()
    },
    mounted() {
      this.test()
    },
    methods: {
      handleClick() {
        // 按钮单击，count自增
        this.count++
      },
      test() {
        this.$root.bus.$on('change', letter => {
          this.value = letter
          console.log(this.value)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
