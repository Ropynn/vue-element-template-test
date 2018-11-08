<template>
  <div class="color-list">
    <div
      class="color-item"
      v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'color' }"
      :key="color"
    >{{color}}</div>
  </div>
</template>

<script>
  export default {
    name: 'orderList',
    data() {
      return {
        colors: ['Aquamarine', 'Hotpink', 'Gold', 'Crimson', 'Blueviolet', 'Lightblue', 'Cornflowerblue', 'Skyblue', 'Burlywood']
      }
    },
    mounted() {
      this.$dragging.$on('dragged', ({ value }) => {
        // console.log(value.item)
        console.log(value.list)
      })
      this.$dragging.$on('dragend', () => {

      })
    }
  }
</script>

<style scoped>

</style>
