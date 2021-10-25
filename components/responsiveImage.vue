<template>
  <div class="responsive-image">
    <image-lazy
      v-if="imageData || correctSizes"
      :alt="imageData ? imageData.alt_text : alt"
      :width="imageData ? imageData.width : width"
      :height="imageData ? imageData.height : height"
      :sizes="sizes ? sizes : imageData.sizes"
      :srcset="imageData ? (imageData.srcset ? imageData.srcset : {}) : {}"
      :format="size"
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
    imageData: {
      type: Object,
      default: null,
    },
    size: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      fetchedSizes: null,
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
}
</script>
