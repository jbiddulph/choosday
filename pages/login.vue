<template>
  <div class="container">
    <h1>Login</h1>
    <UserAuthForm buttonText="Login" :submitForm="loginUser" />
  </div>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'
export default {
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
        this.$router.push('/')
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
