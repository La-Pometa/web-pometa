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
<style scoped lang="scss">
.responsive-image {
  overflow: hidden;

  img {
    max-width: 100%;
    transition: filter 0.5s;
    opacity: 0;
  }

  img.loading {
    opacity: 1;
    filter: blur(60px);
  }
  img.loaded {
    opacity: 1;
    filter: blur(0px);
  }
}
</style>
