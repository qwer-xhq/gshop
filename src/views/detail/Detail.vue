<template>
  <div class="goods-detail">
    <DetailNavBar ref="detailNav" @titleClick="titleClick"/>
    <Scroll class="detail-scroll" ref="scroll" :bounce="false" 
      :probeType="3"  
      @scroll="scroll">
      <DetailSwiper :topImages="topImages"/>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="detailIamgeLoad"></DetailGoodsInfo>
      <DetailParamInfo ref="params" :paramInfo="paramInfo"></DetailParamInfo>
      <DetailCommentInfo ref="comment" :commentInfo="commentInfo"></DetailCommentInfo>
      <GoodsList ref="recommend" :goods="recommends"></GoodsList>
    </Scroll>
    <BackTop @click.native="backTop" v-show="isShowBackTop"></BackTop>
    <DetailBottomBar @addToCart="addToCart"></DetailBottomBar>
    <!-- <Toast /> -->
  </div>
</template>

<script>
  import {getDetail,getRecommend,Goods,Shop,GoodsParam} from 'network/detail.js'
  import {debounce} from '@/common/utils.js'
  import {backTopMixin} from '@/common/mixin.js'

  import Scroll from 'components/common/scroll/Scroll'
  // import Toast from 'components/common/toast/Toast'

  import GoodsList from 'components/content/goods/GoodsList'

  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'

  export default {
    name: 'Detail',
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
	    GoodsList,
      DetailBottomBar,
      // Toast,
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        themeTops: [],
        recommends: [],
        currentIndex: 0,
        themeTopYs: [],
        toastMsg: '',
      }
    },
    methods: {
      detailIamgeLoad() {
        // console.log('detail图片加载完刷新');
        this.$refs.scroll.refresh()
        this.getThemeTopYs()
      },
      titleClick(index){
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100)
      },
      scroll(pos){
        // console.log(pos.y);
        for (let index = 0; index < this.themeTopYs.length; index++) {
          if ((this.currentIndex !== index) && ((index<this.themeTopYs.length-1 && -pos.y>=this.themeTopYs[index] && -pos.y<this.themeTopYs[index+1]) || (index === this.themeTopYs.length-1 && -pos.y>=this.themeTopYs[index]))) {
            this.$refs.detailNav.currentIndex = index
            this.currentIndex = index
          }
        }
        // 滑动到一定距离显示返回顶部按钮
        this.isShowBackTop = (-pos.y) > 1000
      },
      // 获取导航栏各主题位置
      getThemeTopYs(){
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop-44)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44)
        console.log(this.themeTopYs);
      },
      addToCart(){
        // 获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;
        
        // 将商品添加到购物车里
        this.$store.dispatch('addCart',product).then(res => {
          this.$toast(res,2000)
        })
      }
    },
    mixins: [backTopMixin],
    created() {
      this.iid = this.$route.params.id
      // 获取商品信息
      getDetail(this.iid).then(res => {
        console.log(res);
        const data = res.result
        // 1.保存顶部轮播图信息
        this.topImages = data.itemInfo.topImages

        // 2.保存商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3.保存店铺信息
        this.shop = new Shop(data.shopInfo)

        // 4.保存商品信息的详细数据
        this.detailInfo = data.detailInfo

        // 5.保存参数信息
        this.paramInfo = new GoodsParam(data.itemParams)

        // 6.保存评论数据
        if (data.rate.list) { // 判断是否有评论信息
          this.commentInfo = data.rate.list[0];
        }
      })
      // 获取推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
      
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh,200)
      this.$root.$on('goodsImageLoad',() => {
        // console.log('推荐加载完刷新');
        refresh()
      })
    },
    beforeDestroy() {
      this.$root.$off('goodsImageLoad')
    },
  }
</script>

<style scoped>
  .goods-detail {
    height: 100vh;
    position: relative;
    z-index: 3;
    background: #fff;
  }
  .detail-scroll {
    height: calc(100% - 102px);
    overflow: hidden;
  }
</style>