<template>
  <section id="page-home">
    <the-content
      v-if="pageContent"
      class="h-full w-full"
      :content="pageContent"
    ></the-content>
  </section>
</template>
<script>
export default {
  name: 'Home',
  async asyncData({ $content }) {
    const pageData = await $content.getHomePage()
    const pageContent = pageData.content.rendered

    return { pageContent, pageData }
  },
  head() {
    return {
      title: this.$content.getPostHeadTitle(this.pageData),
      meta: [...this.$content.getPostMetaSeo(this.pageData)],
    }
  },
}
</script>
<style lang="scss">
#home-grid {
  & > div {
    @apply relative;
  }
}
.inner-on-hover {
  @apply backdrop-filter backdrop-blur-md transition-all absolute inset-0 bg-white dark:bg-gray-900 dark:bg-opacity-70 bg-opacity-70 opacity-0 hover:opacity-100 flex justify-center items-center;

  .button {
    @apply bg-primary px-3 py-1 text-main-dark inline-block hover:bg-main-dark hover:text-white;
  }
}
</style>
