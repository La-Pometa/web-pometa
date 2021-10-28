<template>
  <div v-if="post" class="blog-card">
    <div v-if="post.featured_source.sizes" class="blog-card-img">
      <responsive-image :image-data="post.featured_source"></responsive-image>
    </div>
    <div v-else class="blog-card-img"><PuSkeleton height="100%" /></div>
    <div>
      <span class="date">{{ post.date | formatDate }}</span>
      <the-content
        :render="$content.getPostTitle(post)"
        tag="h2"
        class="blog-card-title"
      />
    </div>
    <div class="blog-card-excerpt">
      <the-content :render="post.excerpt.rendered" tag="p" />
    </div>
    <div class="read-more">{{ $t('readMore') }}</div>
  </div>
  <div v-else class="blog-card">
    <div class="blog-card-img"><PuSkeleton height="100%" /></div>
    <div>
      <span class="date"><PuSkeleton width="20%" /></span>
      <h2 class="blog-card-title"><PuSkeleton /></h2>
    </div>
    <p class="blog-card-excerpt"><PuSkeleton :count="3" /></p>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="scss">
.blog-card {
  @apply space-y-5 h-full flex flex-col;
  .blog-card-img {
    @apply aspect-w-4 aspect-h-3 relative;

    img {
      @apply object-cover w-full h-full;
    }
  }
  .blog-card-title {
    @apply font-butler font-bold leading-relaxed line-clamp-2;
    font-size: 18px;
  }
  .date {
    @apply text-gray-400 font-thin;
  }
  .blog-card-excerpt {
    @apply pb-5;

    p,
    p div {
      @apply leading-normal line-clamp-3;
    }
  }
  .read-more {
    @apply font-butler cursor-pointer text-primary hover:text-white dark:hover:text-main-dark bg-transparent hover:bg-primary transition-all px-2 py-1 inline-block ml-auto;
    margin-top: auto !important;
  }
}
</style>
