<template>
  <div>
    <section id="all-posts" class="container margins space-y-10">
      <div class="header text-center">
        <h1>Blog</h1>
        <span class="text-primary">La pometa te habla</span>
      </div>
      <div
        v-if="posts"
        class="grid msm:grid-cols-1 mlg:grid-cols-2 grid-cols-3 gap-10"
      >
        <nuxt-link
          v-for="post in posts"
          :key="post.id"
          :to="`/blog/${post.slug}`"
          class="hover:text-main-dark dark:hover:text-white"
          :title="post.title.rendered"
        >
          <div class="blog-card">
            <div v-if="post.featured_source.sizes" class="blog-card-img">
              <responsive-image
                :sizes="post.featured_source.sizes"
              ></responsive-image>
            </div>
            <div v-else class="blog-card-img"><PuSkeleton height="100%" /></div>
            <div>
              <span class="date">{{ post.date | formatDate }}</span>
              <h3 class="blog-card-title">{{ post.title.rendered }}</h3>
            </div>
            <p class="blog-card-excerpt">{{ post.excerpt.rendered }}</p>
          </div>
        </nuxt-link>
      </div>
      <div
        v-else
        class="grid msm:grid-cols-1 mmd:grid-cols-2 grid-cols-3 gap-10"
      >
        <div v-for="index in 9" :key="index" class="blog-card">
          <div class="blog-card-img"><PuSkeleton height="100%" /></div>
          <div>
            <span class="date"><PuSkeleton width="20%" /></span>
            <h3 class="blog-card-title"><PuSkeleton /></h3>
          </div>
          <p class="blog-card-excerpt"><PuSkeleton :count="3" /></p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import responsiveImage from '~/components/responsiveImage.vue'
export default {
  components: { responsiveImage },
  data() {
    return {
      posts: null,
    }
  },
  async fetch() {
    await this.$content.getAllPosts().then((res) => {
      this.posts = res
    })
  },
}
</script>
<style lang="scss">
.blog-card {
  @apply space-y-5;
  .blog-card-img {
    @apply aspect-w-4 aspect-h-3 msm:aspect-w-1 msm:aspect-h-1 relative;

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
    @apply leading-normal line-clamp-3;
  }
}
</style>
