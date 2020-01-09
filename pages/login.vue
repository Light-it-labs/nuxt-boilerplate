<template>
  <form @submit.prevent="login">
        <label for="email">Email</label>
        <input id="email" v-model="form.email" type="email" required>

        <label for="password">Password</label>
        <input id="password" v-model="form.password" type="password" required>

        <button type="submit">
          Login
        </button>
  </form>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data(){
      return {
        form: {
          email: <string> '',
          password: <string> ''
        }
      }
    },

    methods: {
      login(): void {
        this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password
          },
        }).then(() => { });
      }
    },
  })
</script>
