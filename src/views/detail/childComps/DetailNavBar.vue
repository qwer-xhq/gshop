<template>
  <NavBar>
    <div slot="left" class="back">
      <img src="~assets/img/common/back.svg" alt="" @click="backClick">
    </div>
    <ul class="title" slot="center">
      <li v-for="(item,index) in titles"
          class="title-item"
          :class="{active: index === currentIndex}"
          @click="titleClick(index)">
        {{item}}
      </li>
    </ul>
  </NavBar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'DetailNavBar',
    components: {
      NavBar,
    },
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index){
        this.currentIndex = index
        this.$emit('titleClick',index)
      },
      backClick(){
        this.$router.back()
      }
    },
  }
</script>

<style scoped>
  .title {
    display: flex;
    justify-content: space-around;
  }
  .active {
    color: var(--color-high-text);
  }
  .back{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>