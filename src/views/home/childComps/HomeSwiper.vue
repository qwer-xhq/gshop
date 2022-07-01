<template>
  <Swiper>
    <SwiperItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {debounce} from 'common/utils.js'
  import {Swiper,SwiperItem} from "components/common/swiper"

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem,
    },
    data() {
      return {
        isLoad: false
      }
    },
    methods: {
      imageLoad(){
        // if (!this.isLoad) {
        //   this.$emit('swiperImageLoad')
        //   this.isLoad = true
        // }
        this.swiperImageLoad('swiperImageLoad')
      }
    },
    mounted() {
      this.swiperImageLoad = debounce(this.$emit,100)
    },
  }
</script>

<style scoped>

</style>