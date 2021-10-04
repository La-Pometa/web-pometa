<template>
  <component :is="`single-type-${pageType}`" :data="pageData" />
</template>
<script>
export default {
  name: 'GetByPath',
  async asyncData({ $content, params, error, store }) {
    const pageData = await $content.getPageByPath(params.slug)
    if (!pageData || pageData.length === 0) {
      error({ statusCode: 404, message: 'Post not found' })
    } else {
      const translations = {}

      for (const translation of pageData.translations) {
        translations[translation.locale] = { slug: translation.slug }
      }

      store.dispatch('i18n/setRouteParams', translations)
    }
    return { pageData, pageType: pageData.type }
  },
}
</script>
