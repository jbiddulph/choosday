<template>
  <div class="container">
    <h1>Register</h1>
    <UserAuthForm buttonText="Register" :submitForm="registerUser" hasName="true" isRegister="true" />
  </div>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'
export default {
  components: {
    UserAuthForm
  },
  methods: {
    async registerUser(registrationinfo) {
      try {
        await this.$axios.post('http://choosapi.test/api/auth/register', registrationinfo)
        this.$auth.login({
          data: registrationinfo
        })
        this.$store.dispatch('snackbar/setSnackbar', {text: `Thanks for signing in, ${registrationinfo.name}`})
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
