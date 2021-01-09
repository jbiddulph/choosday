<template>
  <div>
    <nav>
      <div class="logo">
        <NuxtLink to="/">Choosday</NuxtLink>
      </div>
      <div v-if="$auth.loggedIn">
        {{ $auth.user.email }}
        <NuxtLink to="/about" class="btn">About</NuxtLink>
        <NuxtLink to="logout" class="btn">Logout</NuxtLink>
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
export default {
  computed: {
    ...mapState(['currentUser'])
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
