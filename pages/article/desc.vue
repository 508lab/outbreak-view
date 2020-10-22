<template>
  <div class="container">
    <div class="content">
      <h3 class="title">{{ data.title }}</h3>
      <p class="time">{{ data.time | dateFormat }}</p>
      <div v-html="data.content"></div>
      <div v-for="item in JSON.parse(data.tag)" :key="item" class="tags">
        <a-tag color="pink" v-if="item == 0">学习</a-tag>
        <a-tag color="orange" v-if="item == 1">生活</a-tag>
        <a-tag color="cyan" v-if="item == 2">交易</a-tag>
        <a-tag color="blue" v-if="item == 3">其他</a-tag>
      </div>
      <a-divider>评论</a-divider>

      <div v-if="isLogin == 1">
        <div slot="content">
          <a-form-item>
            <a-textarea :rows="4" :value="value" @change="handleChange" />
          </a-form-item>
          <a-form-item>
            <a-button
              html-type="submit"
              :loading="submitting"
              type="primary"
              @click="handleSubmit"
            >
              评论
            </a-button>
          </a-form-item>
        </div>
      </div>
      <div class="comments">
        <a-list
          class="comment-list"
          item-layout="horizontal"
          :data-source="comments"
        >
          <a-list-item slot="renderItem" slot-scope="item">
            <p>{{ item.content }}</p>
            <p class="com_time">{{ item.time | dateFormat }}</p>
          </a-list-item>
        </a-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      submitting: false,
    };
  },
  async asyncData({ $axios, query }) {
    const res = await $axios.$get(`/article/info?id=${query.id}`);
    return { data: res.data, comments: res.comments, isLogin: res.login };
  },
  created: function () {
    this.$store.commit("layout/setCurrent", ["article"]);
  },
  methods: {
    handleSubmit() {
      if (!this.value) {
        this.$message.info("输入不能为空");
        return;
      }
      if (this.value.length > 100) {
        this.$message.info("评论不能超出100个字!");
        return;
      }
      this.$axios
        .$post("/article/comment", {
          content: this.value,
          aid: this.data.id
        })
        .then((response) => {
          this.submitting = true;
          if (response.code == "0") {
            this.$message.error(response.err);
          } else {
            this.$message.success('评论成功');
            setTimeout(function(){
              window.location.reload();
            }, 500);
          }
        })
        .catch((error) => {
          this.submitting = true;
          this.$message.error(`服务器异常`);
        });
      
    },
    handleChange(e) {
      this.value = e.target.value;
    },
  },
};
</script>

<style>
.content {
  width: 95%;
  margin: 0 auto;
}
.title {
  text-align: center;
  margin-top: 0.5rem;
}
.time {
  text-align: right;
}
.tags {
  text-align: right;
}
.comments {
}
.com_time {
  width: 100%;
  text-align: right;
  border-bottom: 1px solid #e2d5d5;
  padding-bottom: 0.2rem;
}
</style>
