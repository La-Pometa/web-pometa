<template>
  <div>
    <section id="all-posts" class="container margins space-y-10">
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
              <h2 class="blog-card-title">{{ post.title.rendered }}</h2>
            </div>
            <div class="blog-card-excerpt">
              <p>{{ post.excerpt.rendered }}</p>
            </div>
            <div class="read-more">{{ $t('readMore') }}</div>
          </div>
        </nuxt-link>
      </div>
      <div
        v-else
        class="grid msm:grid-cols-1 mlg:grid-cols-2 grid-cols-3 gap-10"
      >
        <div v-for="index in 9" :key="index" class="blog-card">
          <div class="blog-card-img"><PuSkeleton height="100%" /></div>
          <div>
            <span class="date"><PuSkeleton width="20%" /></span>
            <h2 class="blog-card-title"><PuSkeleton /></h2>
          </div>
          <p class="blog-card-excerpt"><PuSkeleton :count="3" /></p>
        </div>
      </div>
      <div v-if="posts.length > 0">
        <div
          id="pagination"
          ref="pagination"
          :class="!more ? 'hide' : !loadingMore ? 'opacity-0' : ''"
        >
          <div class="loader"></div>
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
  mounted() {
    this.listenScroll()
  },
  activated() {
    this.listenScroll()
  },
  deactivated() {
    this.stopListenScroll()
  },
  beforeDestroy() {
    this.stopListenScroll()
  },
  methods: {
    listenScroll() {
      window.addEventListener('scroll', this.scrollListener)
    },
    stopListenScroll() {
      window.removeEventListener('scroll', this.scrollListener)
    },
    scrollListener() {
      if (!this._isMounted) {
        return
      }
      const bottomOfWindow =
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) +
          window.innerHeight ===
        document.documentElement.offsetHeight

      if (bottomOfWindow) {
        if (this.loadingMore) {
          return
        }
        this.page++
        this.$fetch()
      }
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
.loader {
  @apply w-14 h-14 rounded-full border-4 border-gray-200 dark:border-gray-400 animate-spin;
  border-top-color: theme('colors.primary');
}
</style>
