<template>
  <div class="container">
    <h1>Register</h1>
    <UserAuthForm buttonText="Register" :submitForm="registerUser" hasName="true" />
  </div>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'
export default {
  components: {
    UserAuthForm
  },
  methods: {
    registerUser(resgistrationinfo) {
      alert('here we are', resgistrationinfo)
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
