<template>
  <section id="single-portfolio" class="container-portfolio margins msm:mt-14">
    <header class="grid md:grid-cols-12 gap-10">
      <div class="md:col-span-7">
        <div v-if="post.featured_source">
          <responsive-image
            class="w-full h-full"
            :image-data="post.featured_source"
          ></responsive-image>
        </div>
      </div>
      <div class="md:col-span-5">
        <the-content :render="$content.getPostTitle(post)" tag="h1" />
        <div class="taxs mb-4">
          <the-content
            v-for="(tax, index) in post.tax_info"
            :key="tax.term_id"
            class="inline tax font-bold text-secondary text-lg"
            :render="(index != 0 ? ', ' : '') + tax.name"
          ></the-content>
        </div>
        <the-content :render="$content.getPostContent(post)" />
        <div v-if="$content.getPostMeta(post, 'pg_portfolio_link')">
          <a
            :href="$content.getPostMeta(post, 'pg_portfolio_link')"
            class="font-butler text-lg"
            target="_blank"
            >{{
              $content
                .getPostMeta(post, 'pg_portfolio_link')
                .replace(/(^\w+:|^)\/\//, '')
                .replace(/\/$/, '')
            }}</a
          >
        </div>
      </div>
    </header>
    <nav
      v-if="$content.getPostMeta(post, 'pg_portfolio_navigator')"
      class="flex justify-between align-center"
    >
      <nuxt-link
        :to="
          localePath(
            `/${$content.getPostMeta(post, 'pg_portfolio_navigator').prev.slug}`
          )
        "
        >{{ $t('prev') }}</nuxt-link
      ><nuxt-link class="projects" :to="localePath('/proyectos')">
        <span></span>
        <span></span>
        <span></span>
        <span></span> </nuxt-link
      ><nuxt-link
        :to="
          localePath(
            `/${$content.getPostMeta(post, 'pg_portfolio_navigator').next.slug}`
          )
        "
        >{{ $t('next') }}</nuxt-link
      >
    </nav>
    <section id="portfolio-content">
      <video
        v-if="$content.getPostMeta(post, 'pg_portfolio_video')"
        :poster="
          $content.getPostMeta(post, 'pg_portfolio_video_cover')
            ? $content.getPostMeta(post, 'pg_portfolio_video_cover').sizes.full
                .source_url
            : ''
        "
        width="100%"
        height="auto"
        controls=""
        style="max-width: 100%"
      >
        <source
          :src="$content.getPostMeta(post, 'pg_portfolio_video')"
          type="video/mp4"
        />
        El teu navegador no soporta videos HTML5
      </video>
      <div
        v-if="$content.getPostMeta(post, 'pg_portfolio_galeria')"
        class="portfolio-slider"
      >
        <carousel class="two-items" hide-arrows-on-bound
          ><slide
            v-for="image in $content.getPostMeta(post, 'pg_portfolio_galeria')"
            :key="image.file"
          >
            <responsive-image v-if="image" :image-data="image" /> </slide
        ></carousel>
      </div>
      <div class="tree-cols">
        <div class="item">
          <h3>
            {{ $content.getPostMeta(post, 'pg_portfolio_titolesquerra') }}
            <fa class="arrow" :icon="['fas', 'chevron-down']" />
          </h3>
          <the-content
            :render="$content.getPostMeta(post, 'pg_portfolio_infoesquerra')"
          />
        </div>
        <div class="item">
          <h3>
            {{ $content.getPostMeta(post, 'pg_portfolio_titolcentre') }}
            <fa class="arrow" :icon="['fas', 'chevron-down']" />
          </h3>
          <the-content
            :render="$content.getPostMeta(post, 'pg_portfolio_infocentre')"
          />
        </div>
        <div class="item">
          <h3>
            {{ $content.getPostMeta(post, 'pg_portfolio_titoldreta') }}
            <fa class="arrow" :icon="['fas', 'chevron-down']" />
          </h3>
          <the-content
            :render="$content.getPostMeta(post, 'pg_portfolio_infodreta')"
          />
        </div>
      </div>
      <video
        v-if="$content.getPostMeta(post, 'pg_portfolio_video2')"
        :poster="
          $content.getPostMeta(post, 'pg_portfolio_video2_cover')
            ? $content.getPostMeta(post, 'pg_portfolio_video2_cover').sizes.full
                .source_url
            : ''
        "
        width="100%"
        height="auto"
        controls=""
        style="max-width: 100%"
      >
        <source
          :src="$content.getPostMeta(post, 'pg_portfolio_video2')"
          type="video/mp4"
        />
        El teu navegador no soporta videos HTML5
      </video>
      <div v-if="$content.getPostMeta(post, 'pg_portfolio_posts')" class="">
        <h3 class="text-3xl mb-5">{{ $t('related') }}</h3>
        <div class="grid msm:grid-cols-1 mlg:grid-cols-2 grid-cols-3 gap-10">
          <nuxt-link
            v-for="related in $content.getPostMeta(post, 'pg_portfolio_posts')"
            :key="related.id"
            :to="localePath(`/${related.slug}`)"
            class="hover:text-main-dark dark:hover:text-white no-highlight"
            :title="$content.getPostTitle(related)"
          >
            <post-card :post="related"></post-card>
          </nuxt-link>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import postCard from '../postCard.vue'
export default {
  components: { postCard },
  props: {
    post: {
      type: Object,
      required: true,
      default: null,
    },
  },
  data() {
    return {}
  },
  computed: {},
}
</script>
<style lang="scss" scoped>
#portfolio-content {
  @apply space-y-10;

  .tree-cols {
    @apply grid sm:grid-cols-3 gap-6;

    .item {
      @screen msm {
        &:hover {
          & > div {
            @apply max-h-screen;
          }
          & > h3 {
            @apply mb-5;

            .arrow {
              @apply transform rotate-180;
            }
          }
        }
      }

      h3 {
        @apply font-bold transition-all text-2xl sm:mb-5  sm:text-center msm:p-4 msm:border border-primary msm:flex justify-between items-center;

        .arrow {
          @apply sm:hidden text-base text-gray-300 transition-all;
        }
      }
      & > div {
        @screen msm {
          @apply overflow-hidden transition-all;
          max-height: 0;
        }
      }
    }
  }
}
.container-portfolio {
  width: 100%;
}
@media (min-width: 640px) {
  .container-portfolio {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container-portfolio {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container-portfolio {
    max-width: 1024px;
  }
}
</style>
<style lang="scss">
#single-portfolio {
  h2 {
    @apply font-butler text-xl my-4;
  }
  nav {
    @apply py-14 mmd:py-10;
    a:not(.projects) {
      @apply text-white dark:text-main-dark bg-primary font-thin px-2 hover:no-underline hover:text-main-dark;
    }

    a.projects {
      @apply grid grid-cols-2 place-content-center;
      gap: 2px;

      &:hover {
        span {
          @apply bg-main-dark;
        }
      }

      span {
        @apply w-2.5 h-2.5 bg-primary transition-all;
      }
    }
  }
  strong {
    @apply block mt-4;

    & + strong {
      @apply mt-0;
    }
  }
}
.vs-carousel__wrapper {
  @apply items-center;
}
.vs-carousel__arrows {
  @apply bg-white dark:bg-gray-900;
}
.two-items {
  @apply mb-5 mt-0;

  --items: 2;
  --gap: 0.75rem;

  .vs-carousel__slide {
    height: 100%;

    flex: 0 0 calc(((100% - (var(--gap) * (var(--items) - 1))) / var(--items)));

    margin-right: var(--gap);

    &:last-child {
      margin-right: 0;
    }

    .responsive-image {
      @apply mr-0;
    }

    @screen mxl {
      --items: 2;
    }

    @screen mmd {
      --items: 1;
    }
  }
}
</style>
