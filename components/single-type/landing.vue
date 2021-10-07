<template>
  <div id="landing" :style="cssVars">
    <div v-if="post.featured_source" id="header-image">
      <responsive-image
        class="w-full h-full"
        :sizes="post.featured_source.sizes"
        :alt="post.featured_source.alt"
        :width="post.featured_source.width"
        :height="post.featured_source.height"
      ></responsive-image>
    </div>
    <div class="container-landing margins-header">
      <h1 class="title">
        {{ $content.getPostMeta(post, 'pg_landings_title') }}
      </h1>
      <h2 class="subtitle">
        <the-content
          :content="$content.getPostMeta(post, 'pg_landings_subtitle')"
        />
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-12 mt-10 gap-8">
        <div class="col-span-4 mlg:col-span-1 mlg:row-start-2">
          <div class="sticky top-10">
            <h4>{{ $t('callYou') }}</h4>
            <cf7-form
              id="left-form"
              :render="$content.getPostMeta(post, 'pg_landings_form')"
            />
          </div>
        </div>
        <div class="col-span-8 mlg:col-span-1">
          <the-content :content="post.content.rendered"></the-content>
        </div>
      </div>
    </div>
    <div
      v-if="$content.getPostMeta(post, 'pg_landings_links')"
      id="bottom-section"
    >
      <div class="container-landing mx-auto">
        <h2>
          {{ $content.getPostMeta(post, 'pg_landings_links_title') }}
        </h2>
        <h3>
          {{ $content.getPostMeta(post, 'pg_landings_links_subtitle') }}
        </h3>
        <div class="links flex items-center justify-center">
          <nuxt-link
            v-for="item in $content.getPostMeta(post, 'pg_landings_links')"
            :key="item.link"
            :to="item.link"
            class="link"
          >
            <div class="rounded-full overflow-hidden">
              <div class="w-32 aspect-w-1 aspect-h-1">
                <responsive-image
                  :sizes="item.image.sizes"
                  :width="item.image.width"
                  :height="item.image.height"
                  :alt="item.image.alt"
                  :title="item.image.title"
                ></responsive-image>
              </div>
            </div>
            <span>{{ item.title }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
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
    return {
      gallery: this.$content.getPostMeta(this.post, 'pg_landings_galeria'),
      hex: this.$content.getPostMeta(this.post, 'pg_landings_color'),
      rgb: this.hexToRgb(
        this.$content.getPostMeta(this.post, 'pg_landings_color')
      ),
    }
  },
  computed: {
    cssVars() {
      return {
        '--landing-color': `${this.rgb.r},${this.rgb.g},${this.rgb.b}`,
      }
    },
  },
  methods: {
    hexToRgb(hex) {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b
      })

      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null
    },
  },
}
</script>
<style lang="scss" scoped>
a:hover {
  color: rgba(var(--landing-color), 1);
}
.container-landing {
  width: 100%;
}
@media (min-width: 640px) {
  .container-landing {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container-landing {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container-landing {
    max-width: 1024px;
  }
}
</style>
<style lang="scss">
.vs-carousel__arrows {
  @apply bg-white dark:bg-gray-900;
}
.two-items {
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
#header-image {
  @apply sm:h-96 msm:aspect-w-1 msm:aspect-h-1 msm:w-full mb-5;

  .responsive-image {
    img {
      @apply w-full h-full object-cover;
    }
  }
}
#landing {
  .title {
    @apply text-center max-w-xl mx-auto font-butler font-bold pb-7 leading-snug text-4xl msm:text-3xl;
  }
  .subtitle {
    @apply text-center max-w-md mx-auto font-sset font-bold text-lg msm:text-base my-0;
    color: rgba(var(--landing-color), 1);
  }
  h2 {
    @apply font-butler text-4xl msm:text-xl my-5;
  }
  h4 {
    @apply font-medium text-2xl font-bold;
  }

  p {
    @apply mb-5;
  }
}
#bottom-section {
  @apply p-10;

  background-color: rgba(var(--landing-color), 0.03);

  h2 {
    @apply text-center text-4xl font-bold mb-4 dark:text-white;
    color: rgba(var(--landing-color), 1);

    @media (prefers-color-scheme: dark) {
      color: white !important;
    }
  }
  h3 {
    @apply font-sset uppercase font-bold text-center text-base;
  }

  .links {
    @apply flex pt-9 mmd:flex-col gap-8;

    .link {
      @apply flex items-center justify-center mmd:flex-col uppercase font-bold gap-5;
    }
  }
}
</style>
