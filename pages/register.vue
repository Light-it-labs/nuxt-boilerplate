<template>
  <form @submit.prevent="register">
    <label for="name">Name</label>
    <input id="name" v-model="form.name" type="text" required>

    <label for="email">Email</label>
    <input id="email" v-model="form.email" type="email" class="form-control" required autofocus>

    <label for="password">Password</label>
    <input id="password" v-model="form.password" type="password" required>

    <label for="confirmPassword">Confirm password</label>
    <input id="confirmPassword" v-model="form.confirmPassword" type="password" required>

    <button type="submit">
      Register
    </button>
  </form>
</template>

<script>
  export default {
    data(){
      return {
        form: {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }
      }
    },

    methods: {
      register(){
        this.$axios.post('register', this.form).then(response => {
          if(response.data.success === true)
            this.$auth.loginWith('local', {
              data: {
                email: this.form.email,
                password: this.form.password
              }
            });
        });
      }
    }
  }
</script>
