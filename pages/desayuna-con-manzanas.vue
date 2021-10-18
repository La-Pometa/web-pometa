<template>
  <section id="page-desayuna-con-manzanas">
    <the-content :content="pageContent" />
  </section>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const pageData = await $content.getSingleTypeByPath('desayuna-con-manzanas')
    const pageContent = pageData.content.rendered

    return { pageContent, pageData }
  },
  head() {
    return {
      title: this.$content.getPostMetaSeo(this.pageData, 'title'),
    }
  },
}
</script>
<style lang="scss">
#desayuna-con-manzanas {
  @apply sm:h-screen grid md:grid-cols-2;

  & > .left {
    @apply relative mmd:aspect-w-1 mmd:aspect-h-1;
  }

  & > .right {
    @apply container mx-auto flex items-center;

    & > div {
      @apply space-y-8 md:max-h-screen md:overflow-y-auto;

      .head {
        @apply text-center;

        .subtitle {
          @apply px-10;
        }

        .responsive-image {
          @apply w-14 mx-auto;
        }
      }
    }
  }
}
</style>
