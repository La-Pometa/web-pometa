<template>
  <component :is="`single-type-${postType}`" :post="postData" />
</template>
<script>
export default {
  name: 'GetByPath',
  async asyncData({ $content, params, error, store }) {
    let postData
    try {
      postData = await $content.getSingleTypeByPath(params.slug)
    } catch (error) {
      error(error)
    }
    if (postData.code === 'rest_forbidden') {
      error({ statusCode: 403, message: postData.message })
    }

    if (!postData || postData.length === 0) {
      error({ statusCode: 404, message: 'Post not found' })
    } else {
      const translations = {}

      if (postData.translations) {
        for (const translation of postData.translations) {
          translations[translation.locale] = { slug: translation.slug }
        }
      }

      store.dispatch('i18n/setRouteParams', translations)
    }
    return { postData, postType: postData.type }
  },

  head() {
    return {
      title: this.$content.getPostHeadTitle(this.postData),
      meta: [...this.$content.getPostMetaSeo(this.postData)],
    }
  },
}
</script>
