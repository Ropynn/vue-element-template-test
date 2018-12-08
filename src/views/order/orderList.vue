<template>
  <div class="color-list">
    <!--<grid-->
      <!--:draggable="true"-->
      <!--:sortable="true"-->
      <!--:items="items"-->
      <!--:height="100"-->
      <!--:width="100"-->
      <!--@sort="handleChange">-->
      <!--<template slot="cell" scope="props">-->
        <!--<div>{{props.item}}</div>-->
      <!--</template>-->
    <!--</grid>-->
  </div>
</template>

<script>
  export default {
    name: 'orderList',
    data() {
      return {
        items: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'Burlywood']
      }
    },
    methods: {
      handleChange(e) {
        console.log(e.items)
        e.items.forEach(ele => {
          console.log(ele.item)
        })
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
