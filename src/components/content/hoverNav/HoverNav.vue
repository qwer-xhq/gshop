<template>
  <div class="hover-nav">
    <div v-for="(item,index) in titles" @click="active(index)">
      <span :class="{active: currentIndex===index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HoverNav',
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    methods: {
      active(index){
        this.currentIndex=index
        this.$emit('changeType',index)
      }
    }
  }
</script>

<style scoped>
  .hover-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #eee;
    width: 100%;
    height: 40px;
  }
  .hover-nav span {
    padding: 3px;
  }
  .active {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
    
  }
</style>