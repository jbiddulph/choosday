<template>
  <div>
    <nav>
      <div class="logo">
        <NuxtLink to="/">Choosday</NuxtLink>
      </div>
      
      <div v-if="this.$auth.loggedIn">
        {{ $auth.user.name }}
        <NuxtLink to="/todos" class="btn">Todos</NuxtLink>
        <NuxtLink to="/admin" class="btn">Admin</NuxtLink>
        <div @click="logout" class="btn">Logout</div>
      </div>
      <div v-else>
        <!-- {{ currentUser.name }} -->
        <NuxtLink to="/about" class="btn">About</NuxtLink>
        <NuxtLink to="login" class="btn">Login</NuxtLink>
        <NuxtLink to="register" class="btn">Register</NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    logout() {
      // Code will also be required to invalidate the JWT Cookie on external API
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
      redirect('/login')
    }
  }
};
</script>

<style lang="scss" scoped>
  nav {
    @apply flex justify-between items-center py-2 px-10 w-full bg-white shadow-md;
    .logo {
      @apply p-4 font-bold;
    }
    .btn {
      @apply px-4 py-2 text-gray-500 rounded-lg hover:bg-emerald-100 hover:text-emerald-700;
      &.nuxt-link-exact-active {
        @apply bg-emerald-100 text-emerald-700;
      }
    }
  }

</style>
