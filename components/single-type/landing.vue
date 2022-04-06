<template>
  <section id="single-landing" :style="cssVars">
    <div v-if="$content.getPostMeta(post, 'header') === 'image'">
      <parallax-header
        :image="$content.getPostMeta(post, 'header_image')"
      ></parallax-header>
    </div>
    <div
      v-else-if="$content.getPostMeta(post, 'header') === 'color'"
      id="header-image"
    >
      <div class="flex h-full items-center justify-center py-7">
        <h1 class="title !text-7xl mmd:!text-5xl text-white !pb-0">
          {{ $content.getPostMeta(post, 'pg_landings_title') }}
        </h1>
      </div>
    </div>
    <div
      class="container-landing"
      :class="{
        'margins-header': $content.getPostMeta(post, 'header') !== 'none',
        'margins msm:mt-14': $content.getPostMeta(post, 'header') === 'none',
      }"
    >
      <h1 v-if="$content.getPostMeta(post, 'header') !== 'color'" class="title">
        {{ $content.getPostMeta(post, 'pg_landings_title') }}
      </h1>
      <h2 class="subtitle">
        <the-content
          :render="$content.getPostMeta(post, 'pg_landings_subtitle')"
        />
      </h2>
      <div v-if="$content.getPostMeta(post, 'subtitle_image')">
        <responsive-image
          :image-data="$content.getPostMeta(post, 'subtitle_image')"
        ></responsive-image>
      </div>
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
        <div class="col-span-8 mlg:col-span-1 landing-content">
          <the-content :render="post.content.rendered"></the-content>
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
            class="link no-highlight"
          >
            <div class="rounded-full transform translate-x-0 overflow-hidden">
              <div class="w-32 aspect-w-1 aspect-h-1">
                <responsive-image :image-data="item.image"></responsive-image>
              </div>
            </div>
            <span>{{ item.title }}</span>
          </nuxt-link>
        </div>
      </div>
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
      if (!hex) {
        return {
          r: 0,
          g: 0,
          b: 0,
        }
      }

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
        : {
            r: 0,
            g: 0,
            b: 0,
          }
    },
  },
}
</script>
<style lang="scss">
.landing-content {
  .pg-row-col2 {
    @apply grid sm:grid-cols-2 gap-3;

    img {
      @apply w-full;
    }
  }

  h3 {
    @apply font-butler font-bold text-lg;
  }

  img {
    @apply my-5;
  }

  .landing-icons-grid .image_with_text > p {
    flex-direction: row !important;
    height: auto !important;
  }
  .landing-icons-grid .image_with_text a {
    flex: 0 0 100px;
    text-align: right !important;
    margin-top: unset !important;
    margin-left: auto;
  }
  .kit-digital-solucion .wpb_wrapper > .vc_separator + .wpb_text_column {
    border-left: 1px solid #cccccc;
    padding-left: 15px;
    margin-left: 15px;
  }
  .kit-digital-solucion + .kit-digital-solucion {
    margin-top: 35px;
  }

  .landing-icons-grid .image_with_text img {
    width: 80px !important;
    height: 80px !important;
  }
  .landing-icons-grid .landing-bullet-title {
    font-size: 24px !important;
    text-align: left !important;
    line-height: 28px !important;
  }

  @media (max-width: 768px) {
    .landing-icons-grid .image_with_text img {
      width: 80px !important;
      height: 80px !important;
    }
    .landing-icons-grid .landing-bullet-title {
      font-size: 20px !important;
      line-height: 24px !important;
    }
    .landing-icons-grid .image_with_text > p {
      gap: 5px !important;
    }
  }

  h2,
  h1 {
    @apply py-5;
  }

  table {
    @apply prose dark:prose-invert my-5;
  }

  img {
    @apply inline-block;
  }

  .landing-icons-grid .landing-bullet-title {
    font-weight: bold;
    font-size: 14px;
    text-align: center;
  }
  .landing-icons-grid .landing-bullet-title {
    font-size: 24px !important;
    text-align: left !important;
    line-height: 28px !important;
  }

  .landing-icons-grid .image_with_text a {
    margin-top: auto;
    font-size: 12px;
  }

  .landing-icons-grid .image_with_text a {
    flex: 0 0 100px;
    text-align: right !important;
    margin-top: unset !important;
    margin-left: auto;
  }

  .image_with_text {
    & > p {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: 170px;
      gap: 10px;
      padding: 10px;
      box-sizing: border-box;
      transition: all 0.4s;
    }

    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
      filter: hue-rotate(166deg) opacity(0.3);
    }

    & > p {
      flex-direction: row !important;
      height: auto !important;
    }
  }

  .landing {
    &-box {
      @apply border p-5 my-4;
      border-color: rgba(var(--landing-color), 1);
    }
    &-featured {
      @apply p-5 my-4;
      background-color: rgba(var(--landing-color), 1);
    }
  }
}
</style>
<style lang="scss" scoped>
#header-image {
  background-color: rgba(var(--landing-color), 1);
}
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

    & > * {
      @apply w-full;

      img {
        @apply w-full;
      }
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
#single-landing {
  .title {
    @apply text-center max-w-xl mx-auto font-butler font-bold pb-7 leading-snug text-4xl msm:text-3xl;
  }
  .subtitle {
    @apply text-center max-w-md mx-auto font-sset font-bold text-lg msm:text-base my-0;
    color: rgba(var(--landing-color), 1);
  }
  h2 {
    @apply font-butler text-4xl msm:text-xl my-5 text-center;
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

  background-color: rgba(var(--landing-color), 0.13);

  @media (prefers-color-scheme: dark) {
    background-color: rgba(var(--landing-color), 0.13);
  }

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
