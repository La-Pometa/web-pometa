<template>
  <component :is="`single-type-page-${post.template}`" :post="post"></component>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: null,
    },
  },
}
</script>
