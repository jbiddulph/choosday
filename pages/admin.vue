<template>
  <div class="wrapper">
    <div class="card">
      <div class="title">
        <span class="text-emerald-800">Admin</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ]
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
