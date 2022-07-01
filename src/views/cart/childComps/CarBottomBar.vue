<template>
  <div class="bottom-bar">
    <div class="check-all">
      <check-button class="check-button" @checkBtnClick="checkedAllChange" v-model="checkedAllState"/>
      <span>全选</span>
      <span>合计：{{totalPrice}}</span>
    </div>
    <div class="settle">
      <span>去结算：</span><span>{{checkedLength}}</span>
    </div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'
  export default {
    name: 'CarBottomBar',
    components: {
      CheckButton,
    },
    computed: {
      totalPrice(){
        return '￥' + this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        },0).toFixed(2)
      },

      checkedAllState(){
        return this.$store.getters.checkedAllState
      },

      checkedLength(){
        return this.$store.getters.checkedLength
      }
    },
    methods: {
      checkedAllChange(){
        this.$store.dispatch('checkedAllChange',this.checkedAllState)
      },

    },
  }
</script>

<style scoped>
  .bottom-bar {
    width: 100%;
    height: 40px;
    background-color: #eee;
    display: flex;
    align-items: center;
    padding-left: 10px;
    justify-content: space-between;
  }
  .check-all {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .check-all span {
    margin-left: 8px;
  }
  .check-button {
    width: 22px;
    height: 22px;
  }
  .settle {
    width: 150px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
    color: #fff;
    background-color: red;
  }
</style>