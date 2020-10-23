<template>
  <div class="menu-header">
    <a-menu
      :selectedKeys="$store.state.layout.current"
      mode="horizontal"
      v-bind:style="{ textAlign: 'right' }"
    >
      <a-menu-item key="home"> <nuxt-link to="/">首页</nuxt-link> </a-menu-item>
      <a-menu-item key="article"
        ><nuxt-link to="/article">文章</nuxt-link></a-menu-item
      >
      <a-menu-item key="login">
        <nuxt-link to="/login">登录</nuxt-link>
      </a-menu-item>
    </a-menu>
    <Nuxt />

    <p
      v-bind:style="{
        position: 'initial',
        wdith: '100%',
        bottom: '0px',
        textAlign: 'center',
        marginTop: '0.5rem',
      }"
    >
      <a href="http://www.beian.gov.cn">晋ICP备19005965 号</a>
    </p>
  </div>
</template>
<script>
export default {};
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
</style>
