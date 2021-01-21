<template>
  <div class="container">
    <h1>Login</h1>
    <UserAuthForm buttonText="Login" :submitForm="loginUser" />
  </div>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'notAuthenticated',
  auth: false,
  components: {
    UserAuthForm
  },
  methods: {
    async loginUser(loginInfo){
      try {
        await this.$auth.login({
          data: loginInfo
        })
        this.$store.dispatch('snackbar/setSnackbar', {text: `Thanks for signing in, ${this.$auth.user.name}`})
        setTimeout(() => {
        // we simulate the async request with timeout.
        const auth = {
          accessToken: localStorage.getItem('auth._token.local')
        }
        this.$store.commit('setAuth', auth) // mutating to store for client rendering
        Cookie.set('auth', auth) // saving token in cookie for server rendering
        this.$router.push('/')
      }, 1000)
      } catch {
        this.$store.dispatch('snackbar/setSnackbar', {color: 'red', text: 'There was an issue signing in.  Please try again.'})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
.card {
  @apply p-10 rounded-lg text-emerald-500 bg-emerald-100 shadow-lg;
 .title {
   @apply text-4xl font-bold;
 }
}
</style>
