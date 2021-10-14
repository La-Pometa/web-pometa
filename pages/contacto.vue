<template>
  <div>
    <div id="header-image">
      <parallax :section-height="'100%'">
        <responsive-image
          class="w-full h-full"
          :sizes="pageData.featured_source.sizes"
          :alt="pageData.featured_source.alt"
          :width="pageData.featured_source.width"
          :height="pageData.featured_source.height"
        ></responsive-image>
      </parallax>
    </div>
    <the-content v-if="pageContent" :content="pageContent" />
  </div>
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
      title: this.$content.getPostMetaSeo(this.pageData, 'title'),
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
      @apply w-auto block px-8 ml-auto mr-0;
    }
  }
}
</style>
<style lang="scss" scoped>
#header-image {
  @apply sm:h-110;
}
</style>
