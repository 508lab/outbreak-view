<template>
  <div class="menu-header">
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="home"> <a-icon type="home" />首页 </a-menu-item>
      <a-menu-item key="article"> <a-icon type="snippets" />文章 </a-menu-item>
      <a-menu-item key="login"> <a-icon type="login" />登录 </a-menu-item>
    </a-menu>

    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ["home"],
    };
  },
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.menu-header ul{
  text-align: right;
}
</style>
