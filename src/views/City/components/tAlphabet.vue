<template>
  <div class="alphabet">
    <ul>
      <li class="item" v-for="item in letters" :key="item" :ref="item" @click="handleLetterClick"
          @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}
      </li>
    </ul>
  </div>
</template>
<script>
  import eventBus from '@/model/eventBus'

export default {
    name: 'tAlphabet',
    props: {
      cities: Object
    },
    data() {
      return {
        touchStatus: false
      }
    },
    computed: {
      letters() {
        var letters = []
        for (const key in this.cities) {
          letters.push(key)
        }
        return letters
      }
    },
    updated() {
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
      handleLetterClick(e) {
        console.log('emit1')
        eventBus.$emit('change', e.target.innerText)
        console.log(e.target.innerText)
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        if (this.touchStatus) {
          // 函数节流
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            const startY = this.$refs['A'][0].offsetTop
            const touchY = e.touches[0].clientY - 40
            const index = Math.floor((touchY - startY) / 20)
            if (index >= 0 && index < this.letters.length) {
              eventBus.$emit('change', this.letters[index])
              console.log('emit')
            }
          }, 16)
        }
      },
      handleTouchEnd() {
        this.touchStatus = false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .alphabet {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40px;
    width: 20px;
    right: 0;
    bottom: 0;
    background: #f7f8fc;

    .item {
      text-align: center;
      line-height: 20px;
      font-size: 12px;
    }
  }
</style>


