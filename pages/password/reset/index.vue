<template>
  <div>
    <form @submit.prevent="reset">
      <label for="email">Email</label>
      <input id="email" v-model="form.email" type="email" class="form-control" required autofocus>

      <button type="submit">
        Reset
      </button>
    </form>
    <span v-if="showSuccessMessage">Recuperation link was sent to {{ form.email }}</span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data() {
      return {
        form: {
          email: <string> '',
        },
        showSuccessMessage: <boolean> false,
      }
    },

    methods: {
      async reset(): Promise<any> {
        try {
          let { data } = await this.$axios.post('reset', this.form);
          if (data.success === true) {
            this.showSuccessMessage = true;
            setTimeout(() => {
              this.showSuccessMessage = false;
              this.$router.push('/');
            }, 4000);
          }
        } catch (ex) {
          console.log(ex);
        }
      }
    }
  })
</script>
