<template>
  <section id="single-post" class="post-container margins msm:mt-14 space-y-10">
    <nuxt-link :to="localePath('/blog')" class="flex items-center no-highlight"
      ><fa class="mr-5 max-h-3" icon="arrow-left" />
      {{ $t('goBack') }}</nuxt-link
    >
    <div class="single-post">
      <responsive-image :image-data="post.featured_source"></responsive-image>
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
  </section>
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
    @apply aspect-w-4 aspect-h-3;
    img {
      @apply w-full h-full object-cover;
    }
  }
}
</style>
