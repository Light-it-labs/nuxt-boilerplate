<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
  import Header from './partials/header';
  import Footer from './partials/footer';

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>
