<template>
  <div id="app">
       <!-- 设置路由组件的视图位置 -->
       <router-view></router-view>
       <!-- 并放置非路由组件 -->
       <FooterGuide  v-show="$route.meta.showFooter"s></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
//引入底部组件并注册
  export default {
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

#app 
   width 100%
   height 100%
   background #f5f5f5
</style>