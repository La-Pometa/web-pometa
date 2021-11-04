<template>
  <div id="header-image">
    <parallax :section-height="'100%'">
      <responsive-image
        v-if="image"
        class="w-full h-full"
        :image-data="image"
        :lazy="false"
      ></responsive-image>
      <PuSkeleton v-else height="100%" />
    </parallax>
    <div><slot></slot></div>
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
