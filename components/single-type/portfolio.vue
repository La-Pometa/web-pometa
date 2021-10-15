<template>
  <div id="landing">
    <div v-if="post.featured_source" id="header-image">
      <parallax :section-height="'100%'">
        <responsive-image
          class="w-full h-full"
          :sizes="post.featured_source.sizes"
          :alt="post.featured_source.alt"
          :width="post.featured_source.width"
          :height="post.featured_source.height"
        ></responsive-image>
      </parallax>
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
    return {}
  },
  computed: {},
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
#landing {
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

  background-color: rgba(var(--landing-color), 0.03);

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
