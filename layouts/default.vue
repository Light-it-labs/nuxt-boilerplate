<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
  import Navbar from './partials/navbar';

  export default {
    components: {
      Navbar
    }
  }
</script>
