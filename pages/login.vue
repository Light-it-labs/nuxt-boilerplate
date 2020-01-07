<template>
  <form @submit.prevent="login">
        <label for="email">Email</label>
        <input id="email" v-model="form.email" type="email" class="form-control" required autofocus>

        <label for="password">Password</label>
        <input id="password" v-model="form.password" type="password" required>

        <button type="submit">
          Login
        </button>
  </form>
</template>

<script>
  export default {
    data(){
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },

    methods: {
      login() {
        this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password
          },
        }).then(() => { });
      }
    },
  }
</script>
