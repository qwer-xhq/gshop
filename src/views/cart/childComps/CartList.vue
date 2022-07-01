<template>
  <ul class="cart-list">
    <Scroll class="content">
      <CarListItem v-for="item in cartList" :key="item.iid" :itemInfo="item"></CarListItem>
    </Scroll>
  </ul>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import CarListItem from './CarListItem'
  import {mapGetters} from 'vuex'
  export default {
    name: 'CartList',
    components: {
      Scroll,
      CarListItem,
    },
    computed: {
      ...mapGetters(['cartList'])
    }
  }
</script>

<style scoped>
  .cart-list{
    height: calc(100vh - 93px - 40px);
  }
  .content{
    height: calc(100%);
    overflow: hidden;
  }
</style>