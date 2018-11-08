<template>
  <div class="list" ref="wrapper">
    <div>
      <!-- 当前城市 -->
      <div class="area">
        <div class="title border-topbottom">当前</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button" @click="currentCity">{{cityName}}</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">热门</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.value">
            <div class="button" @click="getValue(item)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 城市列表 -->
      <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="innerItem in item" :key="innerItem.value" @click="getValue(innerItem)">
            <div class="button">{{innerItem.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹出层 -->
    <transition name="fade">
      <div class="toast" v-show="showToast">
        <span class="letter">{{this.letter}}</span>
      </div>
    </transition>
  </div>
</template>
<script>
  import Bscroll from 'better-scroll'
  import eventBus from '@/model/eventBus'

  export default {
    name: 'tList',
    props: {
      cities: Object,
      hotCities: Array,
      cityName: String
    },
    data() {
      return {
        letter: '',
        showToast: false
      }
    },
    created() {
      // console.log(this.cityName)

    },
    watch: {
      letter() {
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
          this.changeToast()
        }
      }
    },
    methods: {
      test(item) {
        console.log(item)
      },
      getValue(item) {
        this.$emit('selectCityList', item)
      },
      currentCity() {
        this.$emit('currentCity', true)
      },
      changeToast() {
        this.showToast = true
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.showToast = false
        }, 500)
      }
    },
    mounted() {
      console.log(eventBus)
      eventBus.$on('change', letter => {
        // console.log('on0')
        this.letter = letter
        // console.log('on')
      })
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true
      })
    }
  }
</script>
<style lang="scss" scoped>
  .list {
    position: absolute;
    overflow: hidden;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;

    .title {
      line-height: 27px;
      padding-left: 10px;
      background: #eee;
    }

    .button-list {
      padding: 5px 30px 5px 5px;
      overflow: hidden;

      .button-wrapper {
        float: left;
        width: 25%;

        .button {
          margin: 5px;
          padding: 5px;
          font-size: 12px;
          border: 1px solid #ccc;
          border-radius: 3px;
          text-align: center;
        }
      }
    }

    .toast {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      width: 50px;
      height: 50px;
      background: #1aad19;
      border-radius: 50%;
      text-align: center;
      transition: all 0.5s;

      &.fade-enter {
        opacity: 0;
      }

      &.fade-leave, &.fade-enter-active {
        opacity: 1;
      }

      &.fade-leave-active {
        opacity: 0;
      }

      .letter {
        line-height: 50px;
        font-size: 16px;
        font-weight: 700;
        color: #eee;
      }
    }
  }
</style>


