<!--
 * @Author: wj
 * @Date: 2020-10-21 21:40:05
 * @LastEditTime: 2020-10-21 22:06:05
 * @LastEditors: wj
 * @Description: 首页
-->
<template>
  <div class="container">
    <div><a href="https://lab508.gitee.io/2020/03/19/qi-ta/ru-he-jia-ru-508-gong-zuo-shi/">寻找开发与维护人员</a></div>
  </div>
</template>

<script>
export default {
  created: function () {
    this.$store.commit("layout/setCurrent", ["home"]);
  },
};
</script>

<style>
</style>
