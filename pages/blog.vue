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
        v-for="(post, index) in posts"
        :key="post.id"
        :to="localePath(`/${post.slug}`)"
        class="hover:text-main-dark dark:hover:text-white no-highlight"
        :title="post.title.rendered"
      >
        <post-card :post="post" :index="index"></post-card>
      </nuxt-link>
    </div>
    <div v-else class="grid msm:grid-cols-1 mlg:grid-cols-2 grid-cols-3 gap-10">
      <post-card v-for="index in 9" :key="index"></post-card>
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

    await this.$content.getAllFromType('posts', this.page).then((res) => {
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
#pagination {
  @apply h-14 flex justify-center;

  &.hide {
    @apply hidden;
  }
}
</style>
