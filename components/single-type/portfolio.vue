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
        <h1>{{ $content.getPostTitle(post) }}</h1>
        <div class="taxs mb-4">
          <the-content
            v-for="(tax, index) in post.tax_info"
            :key="tax.term_id"
            class="inline tax font-bold text-secondary text-lg"
            :content="(index != 0 ? ', ' : '') + tax.name"
          ></the-content>
        </div>
        <the-content :content="$content.getPostContent(post)" />
        <div v-if="$content.getPostMeta(post, 'pg_portfolio_link')">
          <a
            :href="$content.getPostMeta(post, 'pg_portfolio_link')[0]"
            class="font-butler text-lg"
            target="_blank"
            >{{
              $content
                .getPostMeta(post, 'pg_portfolio_link')[0]
                .replace(/(^\w+:|^)\/\//, '')
                .replace(/\/$/, '')
            }}</a
          >
        </div>
      </div>
    </header>
    <nav class="flex justify-between align-center">
      <a href="">prev</a
      ><nuxt-link class="projects" :to="localePath('/proyectos')">
        <span></span>
        <span></span>
        <span></span>
        <span></span> </nuxt-link
      ><a href="">next</a>
    </nav>
    <section id="portfolio-content">
      <video
        v-if="$content.getPostMeta(post, 'pg_portfolio_video')"
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
      <div v-if="$content.getPostMeta(post, 'pg_portfolio_galeria')">
        <carousel class="two-items" hide-arrows-on-bound
          ><slide
            v-for="image in $content.getPostMeta(post, 'pg_portfolio_galeria')"
            :key="image.file"
          >
            <responsive-image :image-data="image" /> </slide
        ></carousel>
      </div>
    </section>
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
  data() {
    return {}
  },
  computed: {},
}
</script>
<style lang="scss" scoped>
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
      @apply text-white bg-primary font-thin px-2 hover:no-underline hover:text-main-dark;
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
.vs-carousel__arrows {
  @apply bg-white dark:bg-gray-900;
}
.two-items {
  @apply my-5;

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
