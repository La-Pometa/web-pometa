<template>
  <div class="container mx-auto margins space-y-8">
    <h1>{{ $content.getPostTitle(post) }}</h1>
    <the-content
      class="space-y-6"
      :render="$content.getPostContent(post)"
    ></the-content>
  </div>
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
