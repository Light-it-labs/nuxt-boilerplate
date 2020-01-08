<template>
  <form @submit.prevent="reset">
    <label for="email">Email</label>
    <input id="email" v-model="form.email" type="email" class="form-control" required autofocus>

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
          email: ''
        }
      }
    },
    methods: {
      reset(){
        this.$axios.post('reset', this.form).then(({ data }) => {
          console.log(data);
        }).catch(ex => {
          console.log(ex);
        }).finally();
      }
    }
  }
</script>
