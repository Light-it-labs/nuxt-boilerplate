<template>
  <form @submit.prevent="reset">
    <label for="password">Password</label>
    <input id="password" v-model="form.password" type="password" class="form-control" required autofocus>

    <label for="confirmPassword">Confirm password</label>
    <input id="confirmPassword" v-model="form.confirm_password" type="password" class="form-control" required autofocus>

    <button type="submit">
      Reset
    </button>
  </form>
</template>

<script>
  export default {

    data(){
      return {
        form: {
          password: '',
          confirm_password: ''
        },
        token: ''
      }
    },

    created(){
      this.token = this.$route.params.token;
    },

    methods: {
      reset(){
        this.$axios.post('reset/' + this.token, this.form).then(({ data }) => {
          if(data.success === true){
            this.$router.push('/login');
          }
          console.log(data);
        }).catch(ex => {
          console.log(ex);
        }).finally();
      }
    }
  }
</script>
