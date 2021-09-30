<template>
  <the-content
    v-if="pageContent"
    class="h-full w-full"
    :content="pageContent"
  ></the-content>
</template>
<script>
export default {
  name: 'Home',
  async asyncData({ $content }) {
    const pageData = await $content.getPageById(8)
    const pageContent = pageData.content.rendered

    return { pageContent, pageData }
  },
  mounted() {
    console.log(this.$i18n)
  },
}
</script>
<style lang="scss">
#home-grid {
  & > div {
    @apply relative;
  }
}
.bg-image {
  @apply absolute inset-0 h-full w-full;

  img {
    @apply absolute inset-0 w-full h-full object-cover;
  }
}
.inner-on-hover {
  @apply backdrop-filter backdrop-blur-md transition-all absolute inset-0 bg-white dark:bg-gray-900 dark:bg-opacity-70 bg-opacity-70 opacity-0 hover:opacity-100 flex justify-center items-center;

  .button {
    @apply bg-primary px-3 py-1 text-main-dark inline-block hover:bg-main-dark hover:text-white;
  }
}
</style>
