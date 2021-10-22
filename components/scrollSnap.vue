<template>
  <carousel hide-arrows-on-bound :style="cssVars">
    <slot></slot>
  </carousel>
</template>

<script>
export default {
  props: {
    items: {
      type: String,
      default: '2',
    },
    gap: {
      type: String,
      default: '0.75rem',
    },
  },
  computed: {
    cssVars() {
      return `--items:${this.items}; --gap:${this.gap};`
    },
  },
}
</script>
<style lang="scss">
.vs-carousel {
  @apply my-5;

  .vs-carousel__slide {
    height: 100%;

    flex: 0 0 calc(((100% - (var(--gap) * (var(--items) - 1))) / var(--items)));

    margin-right: var(--gap);

    &:last-child {
      margin-right: 0;
    }

    .responsive-image {
      @apply mr-0;
    }
  }
}
</style>
