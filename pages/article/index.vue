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
      <a-list-item slot="renderItem" slot-scope="item" >
        <nuxt-link :to="`/article/desc?id=${item.id}`"
          v-bind:style="{ display: 'block', width: '100%' }"
        >
          <p v-bind:style="{ width: '100%', marginBottom: '5px' }">
            {{ item.title }}
          </p>
          <p
            v-bind:style="{
              width: '100%',
              textAlign: 'right',
              marginBottom: '5px',
            }"
          >
            <a-tag color="#108ee9">
              {{ item.time | dateFormat }}
            </a-tag>
          </p>
        </nuxt-link>
      </a-list-item>
    </a-list>
    <div
      v-bind:style="{ textAlign: 'center', marginTop: '1rem' }"
      v-on:click="clickHandler"
    >
      <a-button type="primary" :loading="iconLoading" v-show="isShow">
        {{ btnText }}
      </a-button>
    </div>
  </div>
</template>

<script>


let data = [],
  offset = 0,
  limit = 5;

export default {
  async asyncData({ $axios, query }) {
    const res = await $axios.$get(
      `/article/list/data?limit=${limit}&offset=${offset}`
    );
    return { data: res.data };
  },

  created: function () {
    this.$store.commit("layout/setCurrent", ["article"]);
  },

  data() {
    return {
      data: data,
      offset: offset,
      iconLoading: false,
      limit: limit,
      btnText: "查看更多",
      isShow: true,
    };
  },

  methods: {
    clickHandler: function () {
      this.offset += 2;
      this.iconLoading = true;
      return this.$axios
        .$get(`/article/list/data?limit=${this.limit}&offset=${this.offset}`)
        .then((response) => {
          this.data = this.data.concat(response.data);
          this.iconLoading = false;
          if (response.data.length === 0 || response.data.length < 10) {
            this.btnText = "暂无更多";
            this.isShow = false;
          }
        })
        .catch((error) => {
          console.error(error);
          this.iconLoading = false;
        });
    },

  },
};
</script>

<style>
</style>
