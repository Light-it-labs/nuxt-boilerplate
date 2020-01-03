<template>
  <nav >
    <div class="container">
        <ul>
          <li class="inline">
            <nuxt-link :to="{ name: 'login' }">
              Login
            </nuxt-link>
          </li>
          <li class="inline">
            <nuxt-link :to="{ name: 'register' }">
              Register
            </nuxt-link>
          </li>
          <li class="inline">
            <a @click.prevent="logout">
              Logout
            </a>
          </li>
          <template v-if="loggedIn === true">
            <li>
              Welcome {{ user.name }}
            </li>
          </template>
        </ul>
      </div>
  </nav>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    methods: {
      logout(){
        this.$auth.logout();
      }
    },

    computed: {
      ...mapState('auth', ['loggedIn', 'user'])
    }
  }
</script>
