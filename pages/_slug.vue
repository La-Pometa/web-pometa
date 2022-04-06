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
    } else if (postData.translation) {
      await store.dispatch('i18n/setRouteParams', postData.translation)
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
