<template>
  <div class="responsive-image">
    <image-lazy
      v-if="imageData"
      :alt="alt ? alt : imageData.alt_text"
      :width="width ? width : imageData.width"
      :height="height ? height : imageData.height"
      :srcset="srcset ? srcset : imageData.srcset"
      :format="size"
      :lazy="lazy"
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
    size: {
      type: String,
      default: 'full',
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
    srcset: {
      type: String,
      default: null,
    },
    lazy: {
      type: Boolean,
      default: true,
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
