<template>
  <div id="home">
    <NavBar class="home-nav" ref="navBar"><template v-slot:center>购物街</template></NavBar>
    <HoverNav :titles="['流行','新款','精选']" @changeType='changeType' v-show="isShowHoverNav" ref="hoverNav1"></HoverNav>
    <Scroll :class="{'content':!isShowHoverNav,'content-change':isShowHoverNav}" ref="scroll" 
      :probeType="3" 
      :pullUpLoad="true" 
      @scroll="scroll" 
      @pullingUp="loadMore"
    >
      <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"></HomeSwiper>
      <RecommendView :recommends="recommends" ref="recommend"></RecommendView>
      <FeatureView></FeatureView>
      <HoverNav :titles="['流行','新款','精选']" @changeType='changeType' v-show="!isShowHoverNav" ref="hoverNav2"></HoverNav>
      <GoodsList :goods="showGoods"></GoodsList>
    </Scroll>
    <BackTop @click.native="backTop" v-show="isShowBackTop"></BackTop> <!-- native让组件可以使用原生点击事件 -->
  </div>
</template>

<script>
  import {debounce} from '@/common/utils.js'
  import {backTopMixin} from '@/common/mixin.js'

  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import HoverNav from 'components/content/hoverNav/HoverNav'
  import GoodsList from 'components/content/goods/GoodsList'
  

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView"

  import {getHomeMultidata, getHomeGoods} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      HoverNav,
      GoodsList,
      Scroll,
      
    },
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          pop: {page: 0, list:[]},
          new: {page: 0, list:[]},
          sell: {page: 0, list:[]}
        },
        currentType:'pop', // 当前商品Type
        previousType: 'pop', // 上一个商品Type
        // isShowBackTop: false,
        isShowHoverNav: false,
        timer: null,
        hoverNavoffsetTop: null,
        saveY: 0,
        goodsY: {
          popY: 0,
          popMaxY: 0,
          newY: 0,
          newMaxY: 0,
          sellY: 0,
          sellMaxY: 0,
        },
      }
    },
    mixins: [backTopMixin],
    computed: {
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /**
       * 事件监听相关方法
       */
      // 切换不同类型数据
      changeType(index){
        this.$refs.scroll.refresh()
        // 获取切换时当前滚动位置
        const posY = this.$refs.scroll.scroll.y
        const maxY = this.$refs.scroll.scroll.maxScrollY
        // 记录不同商品Type页面切换时位置
        this.changeTypePos(posY,maxY)
        // 获取当前商品Type，并跳转到当前页上一次切换时位置
        switch(index){
          case 0:
            this.currentType = 'pop'
            this.previousType = this.currentType //将当前Type记录为切换前一个Type
            // this.$refs.scroll.refresh()
            this.$refs.scroll.scroll.maxScrollY = this.goodsY.popMaxY
            this.$refs.scroll.scrollTo(0, this.goodsY.popY, 0)
            break
          case 1:
            this.currentType = 'new'
            this.previousType = this.currentType
            // this.$refs.scroll.refresh()
            this.$refs.scroll.scroll.maxScrollY = this.goodsY.newMaxY
            this.$refs.scroll.scrollTo(0, this.goodsY.newY, 0)
            break
          case 2:
            this.currentType = 'sell'
            this.previousType = this.currentType
            // this.$refs.scroll.refresh()
            this.$refs.scroll.scroll.maxScrollY = this.goodsY.sellMaxY
            this.$refs.scroll.scrollTo(0, this.goodsY.sellY, 0)
            break
        }
        // 使两个hoverNav状态保持一致
        this.$refs.hoverNav1.currentIndex = index
        this.$refs.hoverNav2.currentIndex = index

      },
      // 记录不同类型页面切换时位置
      changeTypePos(posY,maxY){
        switch (this.previousType) {
          case 'pop':
            this.goodsY.popMaxY = maxY
            this.goodsY.popY = posY
            break;
          case 'new':
            this.goodsY.newMaxY = maxY
            this.goodsY.newY = posY
            break;
          case 'sell':
            this.goodsY.sellMaxY = maxY
            this.goodsY.sellY = posY
            break;
        }
      },
        
      // 返回顶部
      // backTop() {
      //   this.$refs.scroll.scrollTo(0, 0, 500)
      // },
      // 滚动监听
      scroll(position){
        // console.log(position.y);
        // 滑动到一定距离显示返回顶部按钮
        this.isShowBackTop = (-position.y) > 1000

        // 判断hoverNav是否吸顶
        this.isShowHoverNav = (-position.y) > (this.hoverNavoffsetTop-this.$refs.navBar.$el.offsetHeight)

      },
      // 加载更多数据
      loadMore(){
        // 解决快速频繁上拉刷新
        if (this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          console.log('加载更多');
          this.getHomeGoods(this.currentType)
        }, 1000);
      },

      swiperImageLoad(){
        // 获取hoverNav位置
        this.hoverNavoffsetTop = this.$refs.hoverNav2.$el.offsetTop
        // 不同类型商品页位置赋初值
        this.goodsY.popY = -this.hoverNavoffsetTop
        this.goodsY.newY = -this.hoverNavoffsetTop
        this.goodsY.sellY = -this.hoverNavoffsetTop
      },
      /**
       * 网络请求相关方法
       */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page=page
          // console.log('加载完成');
        })
      },
    },
    created() {
      this.getHomeMultidata()

      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    mounted() {
      // console.log('home mounted');
      
      // const refresh = debounce(this.$refs.scroll.refresh,200)
      // this.$root.$on('goodsImageLoad',() => {
      //   refresh()
      // })

      // 初始化不同Type页面maxY
      this.$root.$once('initMaxY',maxY => {
        this.goodsY.popMaxY = maxY
        this.goodsY.newMaxY = maxY
        this.goodsY.sellMaxY = maxY
        // console.log('initMaxY');
      })

    },
    activated() {
      // console.log('home active');
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.saveY, 0)

      const refresh = debounce(this.$refs.scroll.refresh,200)
      this.$root.$on('goodsImageLoad',() => {
        refresh()
      })
    },
    deactivated() {
      // console.log('home deactivated');
      this.saveY = this.$refs.scroll.scroll.y
      this.$root.$off('goodsImageLoad')
    },
    beforeDestroy() {
      
    },
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    padding-bottom: 49px;
    height: 100vh;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 3;
  }
  .content {
    height: calc(100%);
    overflow: hidden;
  }
  .content-change {
    height: calc(100% - 40px);
    overflow: hidden;
  }
</style>
