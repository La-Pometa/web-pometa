<template>
  <section id="page-pometa">
    <parallax-header :image="pageData.featured_source" />
    <the-content v-if="pageContent" :content="pageContent" />
  </section>
</template>
<script>
export default {
  name: 'Contact',
  async asyncData({ $content }) {
    const pageData = await $content.getSingleTypeByPath('pometa')
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
#page-pometa {
  @screen sm {
    #header-image {
      height: 37rem;
    }
  }

  #header-image {
    img {
      @apply filter grayscale;
    }
  }
}
#contact-page {
  #grid {
    @apply grid grid-cols-1 lg:grid-cols-12 mt-10 gap-8;

    .left-sidebar {
      @apply lg:col-span-4 space-y-5;
    }

    .content {
      @apply lg:col-span-8;
    }

    .cf7-form [type='submit'] {
      @apply w-auto block px-8 ml-auto;
    }
  }
}
</style>
