<!--
 * @Author: wj
 * @Date: 2020-10-21 22:05:05
 * @LastEditTime: 2020-10-21 22:09:08
 * @LastEditors: wj
 * @Description: 文章列表页
-->
<template>
  <div class="container">
    <a-list size="large" bordered :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item">
        {{ item }}
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

export default {
  data() {
    return {
      data,
    };
  },
};
</script>

<style>
</style>
