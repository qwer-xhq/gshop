<template>
  <div id="app">
    <keep-alive include="Home">
      <router-view />
    </keep-alive>
    <mainTabBar />
  </div>
</template>

<script>
import mainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: "App",
  components: {
    mainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
/* #app {
    height: 100vh;
  } */
</style>
