<template>
  <header>
    <nav>
      <div class="container">
          <ul>
            <template v-if="loggedIn === false">
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
            </template>
            <template v-else>
              <li class="inline">
                Welcome {{ user.name }}
              </li>
              <li class="inline">
                <a href="" @click.prevent="logout">
                  Logout
                </a>
              </li>
            </template>
          </ul>
        </div>
    </nav>
  </header>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapState } from 'vuex';

  export default Vue.extend({
    methods: {
      logout(): void {
        this.$auth.logout();
      }
    },

    computed: {
      ...mapState('auth', ['loggedIn', 'user'])
    }
  })
</script>
