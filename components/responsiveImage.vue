<template>
  <div class="responsive-image">
    <image-lazy
      v-if="imageData || correctSizes"
      :alt="imageData ? imageData.alt_text : alt"
      :width="imageData ? imageData.media_details.width : width"
      :height="imageData ? imageData.media_details.height : height"
      :sizes="sizes ? sizes : fetchedSizes"
    ></image-lazy>
    <PuSkeleton v-else height="100%" />
  </div>
</template>
<script>
export default {
  props: {
    mediaId: {
      type: Number,
      default: null,
    },
    mediaSlug: {
      type: String,
      default: null,
    },
    sizes: {
      type: Object,
      default: null,
    },
    alt: {
      type: String,
      default: null,
    },
    width: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
    blur: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      imageData: null,
      fetchedSizes: null,
    }
  },
  async fetch() {
    if (this.mediaSlug) {
      await this.$content
        .getImagebySlug(this.mediaSlug)
        .then((res) => {
          this.fetchedSizes = res.media_details.sizes
          this.imageData = res
        })
        .catch(() => {
          throw new Error('Error fetching image...')
        })
    } else if (this.mediaId) {
      await this.$content
        .getImage(this.mediaId)
        .then((res) => {
          this.fetchedSizes = res.media_details.sizes
          this.imageData = res
        })
        .catch(() => {
          throw new Error('Error fetching image...')
        })
    }
  },
  computed: {
    correctSizes() {
      return (
        Object.prototype.hasOwnProperty.call(this.sizes, 'mini_webp') &&
        Object.prototype.hasOwnProperty.call(this.sizes, 'full_webp')
      )
    },
  },
  mounted() {
    console.log(this.sizes)
  },
}
</script>
