<template>
  <section id="single-post" class="post-container margins msm:mt-14 space-y-10">
    <a
      class="flex items-center no-highlight cursor-pointer"
      @click="$router.go(-1) ? $router.go(-1) : localePath('/blog')"
      ><fa class="mr-5 max-h-3" icon="arrow-left" /> {{ $t('goBack') }}</a
    >
    <div class="single-post">
      <div class="header">
        <parallax :section-height="'100%'">
          <responsive-image
            :image-data="post.featured_source"
            :lazy="false"
            class="featured"
          ></responsive-image>
        </parallax>
      </div>

      <div>
        <the-content
          class="post-content"
          :render="post.title.rendered"
          tag="h1"
        />
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
        :render="post.content.rendered"
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

  .header {
    @apply aspect-w-4 aspect-h-3;
    .responsive-image {
      @apply w-full h-full object-cover;
    }
  }

  .post-content .responsive-image {
    @apply w-full my-5;
  }

  video,
  iframe {
    @apply w-full;
  }
}
</style>
