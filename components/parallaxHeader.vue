<template>
  <div id="header-image">
    <parallax :section-height="'100%'">
      <responsive-image
        v-if="image"
        class="w-full h-full"
        :sizes="image.sizes"
        :alt="image.alt"
        :width="image.width"
        :height="image.height"
      ></responsive-image>
      <PuSkeleton v-else height="100%" />
    </parallax>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style></style>
