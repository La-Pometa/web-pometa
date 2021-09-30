<template>
  <div class="post-container margins space-y-10">
    <nuxt-link :to="localePath('/blog')" class="flex items-center"
      ><fa class="mr-5 max-h-3" icon="arrow-left" /> Volver</nuxt-link
    >
    <div v-if="post" class="single-post">
      <responsive-image
        :width="post.featured_source.width"
        :height="post.featured_source.height"
        :alt="post.featured_source.alt"
        :title="post.featured_source.title"
        :sizes="post.featured_source.sizes"
      ></responsive-image>
      <div>
        <h1>{{ post.title.rendered }}</h1>
        <div
          class="
            text-opacity-70
            dark:text-opacity-70
            text-main-dark
            dark:text-white
          "
        >
          <span v-for="(tax, index) in post.tax_info" :key="tax.term_id"
            ><span v-if="index != 0">, </span>{{ tax.name }}</span
          >
          <span v-if="post.tax_info.length > 0"> - </span>
          <span>{{ post.date | formatDate }}</span>
        </div>
      </div>
      <the-content
        class="post-content"
        :content="post.content.rendered"
      ></the-content>
    </div>
    <div v-else class="single-post">
      <div class="responsive-image">
        <PuSkeleton height="100%" />
      </div>
      <h1><PuSkeleton /></h1>
      <div class="post-content">
        <p v-for="index in 5" :key="index"><PuSkeleton :count="index + 3" /></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      post: null,
    }
  },
  async fetch() {
    await this.$content.getPostBySlug(this.$route.params.slug).then((res) => {
      this.post = res
      if (!res) {
        this.$nuxt.error({ statusCode: 404, message: 'Post not found' })
      }
    })
  },
  mounted() {},
}
</script>
<style lang="scss" scoped>
.post-container {
  width: 100%;
}
@media (min-width: 640px) {
  .post-container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .post-container {
    max-width: 768px;
  }
}
</style>
<style lang="scss">
.post-content {
  h3 {
    @apply text-xl my-5 font-sset;
  }
  p {
    @apply my-4;
  }
}
.single-post {
  @apply space-y-10 msm:space-y-5;

  .responsive-image {
    @apply aspect-w-4 aspect-h-3 msm:aspect-w-1 msm:aspect-h-1;
    img {
      @apply w-full h-full object-cover;
    }
  }
}
</style>
