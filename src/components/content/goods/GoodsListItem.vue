<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad">
    <div>
      <p>{{goodsItem.title}}</p>
      <p>
        <span>{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </p>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'GoodsListItem',
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImage(){
        return this.goodsItem.show?.img || this.goodsItem.image || this.goodsItem.img // "?"前面的访问的属性有值则继续访问，否则返回undefined
      }
    },
    methods: {
      // 图片加载完成时触发
      imageLoad() {
        this.$root.$emit('goodsImageLoad')
      },
      itemClick(){
        this.$router.push('/detail/'+ this.goodsItem.iid)
      }
    },
    mounted() {

    },
  }
</script>

<style scoped>
  .goods-item {
    width: 45%;
    height: 300px;
  }
  .goods-item img {
    width: 100%;
    height: 85%;
    border-radius: 10px;
  }
  .goods-item>div>p:nth-child(1){
    height: 22px;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods-item>div>p:nth-child(2)>span:nth-child(1){
    color: var(--color-tint);
  }
  .goods-item .collect::before {
    display: inline-block;
    content: '';
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>