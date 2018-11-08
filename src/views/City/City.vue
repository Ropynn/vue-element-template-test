<template>
  <div class="city">
    <t-header></t-header>
    <t-list :cities="cities" :hotCities="hotCities" @selectCityList="selectCityList" :cityName="cityName"
            @currentCity="currentCity"></t-list>
    <t-alphabet :cities="cities"></t-alphabet>
  </div>
</template>

<script>
  import { getCitiesInfo } from '@/api/getData'
import tHeader from './components/tHeader'
import tList from './components/tList'
import tAlphabet from './components/tAlphabet'

export default {
    name: 'City',
    components: { tHeader, tList, tAlphabet },
    props: {
      cityName: String
    },
    data() {
      return {
        cities: {},
        hotCities: []
      }
    },
    created() {
      // console.log(this.cityName)
    },
    methods: {
      getCityInfo() {
        getCitiesInfo().then(this.getCityInfoSucc)
      },
      getCityInfoSucc(res) {
        if (res.data.ret && res.data) {
          const cityInfo = res.data.data
          console.log(cityInfo)
          this.cities = cityInfo.cities
          this.hotCities = cityInfo.hotCities
        // this.$emit('selectCity', this.hotCities);
        // this.$emit('selectCity', this.hotCities);
        }
      },
      selectCityList(info) {
        console.log(info, '11')
        this.$emit('selectCity', info)
      },
      currentCity(item) {
        this.$emit('getCurrent', item)
      }
    },
    mounted() {
      this.getCityInfo()
    }
  }
</script>


