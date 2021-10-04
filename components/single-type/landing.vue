<template>
  <div>
    <div v-if="data.featured_source" id="header-image">
      <responsive-image
        class="w-full h-full"
        :sizes="data.featured_source.sizes"
        :alt="data.featured_source.alt"
        :width="data.featured_source.width"
        :height="data.featured_source.height"
      ></responsive-image>
    </div>
    <div class="container margins">
      <h1>{{ data.title.rendered }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: null,
    },
  },
}
</script>
<style lang="scss">
#header-image {
  @apply h-96;

  .responsive-image {
    img {
      @apply w-full h-full object-cover;
    }
  }
}
</style>
