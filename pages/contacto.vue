<template>
  <section id="page-contact">
    <div id="header-image">
      <parallax :section-height="'100%'">
        <responsive-image
          class="w-full h-full"
          :image-data="pageData.featured_source"
        ></responsive-image>
      </parallax>
    </div>
    <the-content v-if="pageContent" :content="pageContent" />
  </section>
</template>
<script>
export default {
  name: 'Contact',
  async asyncData({ $content }) {
    const pageData = await $content.getSingleTypeByPath('contacto')
    const pageContent = pageData.content.rendered

    return { pageContent, pageData }
  },
  head() {
    return {
      title: this.$content.getPostMetaSeo(this.pageData, 'title')
        ? this.$content.getPostMetaSeo(this.pageData, 'title')
        : this.$content.getPostMetaSeo(this.pageData, 'og_title'),
    }
  },
}
</script>
<style lang="scss">
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
