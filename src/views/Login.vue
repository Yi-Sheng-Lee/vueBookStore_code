<template>
  <div class="bg-light d-flex justify-content-center aligns-items-center sign-box">
    <loading :active.sync="isLoading"/>
    <form class="form-signin text-center" @submit.prevent="signin">
      <div class="border border-secondary rounded bg-white p-3">
        <router-link to="/"><img src="../assets/login-icon.png" alt="login-pic" class="img-fliud img-size"></router-link>
        <h1 class="h3 font-weight-normal">Sign in for admin</h1>
        <div class="my-3">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            v-model="user.username"
            placeholder="Email address"
            required
            autofocus
          >
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            v-model="user.password"
            placeholder="Password"
            required
          >
        </div>
        <button class="btn btn-lg btn-primary btn-block" disabled type="submit" v-if="isLoading">Signing in...</button>
        <button class="btn btn-lg btn-primary btn-block" type="submit" v-else>Sign in</button>
      </div>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      isLoading: false,
    };
  },
  methods: {
    signin() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      vm.isLoading = true;
      this.$http.post(api, vm.user).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/dashboard/products");
          vm.isLoading = false;
        }
      });
    }
  }
};
</script>

<style scoped>
html,
body {
  height: 100%;
}
body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;

  background-color: #f5f5f5;
}
.img-size{
  width: 100px;
  height: 100px;
}
.sign-box {
  min-height: 100vh;
}
.form-signin {
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>