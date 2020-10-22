<template>
  <div
    class="container"
    v-bind:style="{ width: '350px', margin: '0 auto', marginTop: '2rem' }"
  >
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            {
              rules: [{ required: true, message: '请输入您的学号！' }],
            },
          ]"
          placeholder="请输入您的学号！"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [{ required: true, message: '请输入您的密码!' }],
            },
          ]"
          type="password"
          placeholder="请输入您的密码！"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true,
            },
          ]"
        >
          记住密码
        </a-checkbox>
        <a-button type="primary" html-type="submit" class="login-form-button">
          Log in
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>


<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  created: function () {
    this.$store.commit("layout/setCurrent", ["login"]);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$axios
            .$post("/loginin", {
              studentid: values.userName,
              password: values.password,
            })
            .then((response) => {
              if (response.code == "0") {
                this.$message.error(response.err);
              } else {
                window.location.href = '/info/index';
              }
            })
            .catch((error) => {
              this.$message.error(`服务器异常`);
            });
        }
      });
    },
  },
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>