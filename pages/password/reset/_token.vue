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

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data() {
      return {
        form: {
          password: <string> '',
          confirm_password: <string> ''
        },
        token: <string> ''
      }
    },

    created(): void {
      this.token = this.$route.params.token;
    },

    methods: {
      async reset(): Promise<any> {
        try {
          let { data } = await this.$axios.post('reset/' + this.token, this.form);
          if(data.success === true){
            this.$router.push('/password/reset/success');
          }
        } catch(ex) {
          console.log(ex);
        }
      }
    }
  })
</script>
