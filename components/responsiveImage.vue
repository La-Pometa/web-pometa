<template>
  <div class="responsive-image">
    <image-lazy
      v-if="imageData"
      :alt="imageData.alt_text"
      :width="imageData.media_details.width"
      :height="imageData.media_details.height"
      :sizes="sizes"
    ></image-lazy>
    <PuSkeleton v-else height="100%" />
  </div>
</template>
<script>
export default {
  props: {
    mediaId: {
      type: String,
      default: null,
    },
    mediaSlug: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      imageData: null,
      sizes: null,
    }
  },
  async fetch() {
    if (this.mediaSlug) {
      await this.$content
        .getImagebySlug(this.mediaSlug)
        .then((res) => {
          this.sizes = res.media_details.sizes
          this.imageData = res
        })
        .catch(() => {
          throw new Error('Error fetching data...')
        })
    } else if (this.mediaId) {
      await this.$content
        .getImage(this.mediaId)
        .then((res) => {
          this.sizes = res.media_details.sizes
          this.imageData = res
        })
        .catch(() => {
          throw new Error('Error fetching data...')
        })
    }
  },
}
</script>
<style lang="scss">
.responsive-image {
  @apply overflow-hidden;
}
</style>
