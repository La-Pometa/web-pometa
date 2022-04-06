<template>
  <div>
    <div v-if="post.featured_source" id="header-image">
      <parallax :section-height="'100%'">
        <responsive-image
          class="w-full h-full"
          :image-data="post.featured_source"
        ></responsive-image>
      </parallax>
    </div>
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
