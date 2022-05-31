<template>
  <div>
    <GlobalHeader></GlobalHeader>
    <!-- 路由组件出口的 -->
    <router-view></router-view>
    <!-- 登录，注册隐藏，home,search显示 -->
    <GlobalFooter v-show="$route.meta.isAuth"></GlobalFooter>
  </div>
</template>

<script>
import GlobalHeader  from './components/Header/GlobalHeader.vue'
import GlobalFooter from './components/Footer/GlobalFooter.vue'
export default {
  name: 'App',
  // 注册组件
  components: {
    GlobalHeader,
    GlobalFooter
  },
  mounted() {
    // 在页面挂载完成之后请求数据，只会请求一次
    this.$store.dispatch("Home/categroylist");
  },
}
</script>

<style>
</style>
