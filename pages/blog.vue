<template>
  <section id="archive-blog" class="container margins msm:mt-14 space-y-10">
    <div class="header text-center">
      <h1>Blog</h1>
      <span class="text-primary">{{ $t('blogSubtitle') }}</span>
    </div>
    <div
      v-if="posts.length > 0"
      class="grid msm:grid-cols-1 mlg:grid-cols-2 grid-cols-3 gap-10"
    >
      <nuxt-link
        v-for="post in posts"
        :key="post.id"
        :to="localePath(`/${post.slug}`)"
        class="hover:text-main-dark dark:hover:text-white no-highlight"
        :title="post.title.rendered"
      >
        <div class="blog-card">
          <div v-if="post.featured_source.sizes" class="blog-card-img">
            <responsive-image
              :image-data="post.featured_source"
            ></responsive-image>
          </div>
          <div v-else class="blog-card-img"><PuSkeleton height="100%" /></div>
          <div>
            <span class="date">{{ post.date | formatDate }}</span>
            <h2 class="blog-card-title">{{ post.title.rendered }}</h2>
          </div>
          <div class="blog-card-excerpt">
            <p>{{ post.excerpt.rendered }}</p>
          </div>
          <div class="read-more">{{ $t('readMore') }}</div>
        </div>
      </nuxt-link>
    </div>
    <div v-else class="grid msm:grid-cols-1 mlg:grid-cols-2 grid-cols-3 gap-10">
      <div v-for="index in 9" :key="index" class="blog-card">
        <div class="blog-card-img"><PuSkeleton height="100%" /></div>
        <div>
          <span class="date"><PuSkeleton width="20%" /></span>
          <h2 class="blog-card-title"><PuSkeleton /></h2>
        </div>
        <p class="blog-card-excerpt"><PuSkeleton :count="3" /></p>
      </div>
    </div>
    <div v-show="posts.length > 0">
      <div
        id="pagination"
        ref="pagination"
        :class="!more ? 'hide' : !loadingMore ? 'opacity-0' : ''"
      >
        <div id="loadMore" class="loader"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'BlogArchive',
  data() {
    return {
      posts: [],
      page: 1,
      loadingMore: false,
      more: true,
    }
  },
  async fetch() {
    if (!this.more) {
      return
    }

    this.loadingMore = true

    await this.$content.getAllPosts(this.page).then((res) => {
      this.posts.push(...res)
      this.loadingMore = false

      if (res.length < 9) {
        this.more = false
      }
    })
  },
  head() {
    return {
      title: this.$content.getTitle('Blog'),
    }
  },
  mounted() {
    this.observeLoadMore()
  },
  methods: {
    observeLoadMore() {
      this.observer = new IntersectionObserver((entries) => {
        const image = entries[0]
        if (image.isIntersecting) {
          if (this.loadingMore) {
            return
          }
          this.page++
          this.$fetch()
        }
      })
      this.observer.observe(this.$refs.pagination)
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

    p {
      @apply leading-normal line-clamp-3;
    }
  }
  .read-more {
    @apply font-butler cursor-pointer text-primary hover:text-white dark:hover:text-main-dark bg-transparent hover:bg-primary transition-all px-2 py-1 inline-block ml-auto;
    margin-top: auto !important;
  }
}
#pagination {
  @apply h-14 flex justify-center;

  &.hide {
    @apply hidden;
  }
}
</style>
