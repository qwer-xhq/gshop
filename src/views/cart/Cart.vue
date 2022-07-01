<template>
  <div class="cart">
    <NavBar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
    <CartList></CartList>
    <CarBottomBar></CarBottomBar>
  </div>
  
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import CarBottomBar from './childComps/CarBottomBar'
  import {mapGetters} from 'vuex'
  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      CarBottomBar,
    },
    computed: {
      // cartLength(){
      //   return this.$store.getters.cartLength
      // },
      ...mapGetters(['cartLength']), // 相当于上面的代码
    }
  }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    font-weight: bolder;
    color: #fff;
    position: relative;
    width: 100%;
    z-index: 3;
  }
</style>
