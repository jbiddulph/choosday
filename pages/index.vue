<template>
  <div class="wrapper">
    <div class="card">
      <div class="title">
        <span class="text-emerald-800">CHOOSDAY</span>.com &amp; la la la
        <!-- <div v-for="user in users" :key="user.id">
          {{user.name}}
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  // computed: {
  //   ...mapState(['users'])
  // },
  // mounted() {
  //   if (!this.$store.state.user.users.length) {
  //     this.$store.dispatch('loadAll')
  //   }
  // }
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
