<template>
  <picture v-if="srcset">
    <source v-if="!loaded" :srcset="srcMini" />
    <source
      v-for="(src, index) in getSrcset"
      :key="index"
      :srcset="src.source_url"
      :type="src.mime_type"
    />
    <img
      ref="image"
      :src="srcImage"
      :alt="alt"
      :width="width"
      :height="height"
      :title="title"
    />
  </picture>
  <picture v-else>
    <img
      ref="image"
      :src="srcImage"
      :alt="alt"
      :width="width"
      :height="height"
      :title="title"
    />
  </picture>
</template>

<script>
export default {
  props: {
    sizes: { type: Object, default: null },
    alt: {
      type: String,
      default: null,
    },
    width: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
    blur: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: null,
    },
    srcset: { type: Object, default: null },
    format: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      observer: null,
      intersected: false,
      elCopy: null,
      loaded: false,
      elWidth: 0,
    }
  },
  computed: {
    getSrcset() {
      let sets = {}
      let lastKey = false
      for (const [key, src] of Object.entries(this.srcset)) {
        if (src.width <= this.elWidth) {
          if (lastKey) {
            const toSet = Object.entries(this.srcset).filter(
              (x) => x[1].width === this.srcset[lastKey].width
            )
            toSet.forEach((item) => {
              sets[item[0]] = this.srcset[item[0]]
            })

            lastKey = false
          }
          sets[key] = src
        } else {
          lastKey = key
        }

        if (src.mime_type === 'image/gif') {
          sets = {}
        }
      }

      return sets
    },
    srcImage() {
      return this.intersected ? this.loadImage() : this.loadMini()
    },
    srcMini() {
      return this.sizes.mini_webp
        ? this.sizes.mini_webp.source_url
        : this.sizes.mini.source_url
    },
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      const image = entries[0]
      if (image.isIntersecting) {
        this.intersected = true
        this.observer.disconnect()
      }
    })

    this.observer.observe(this.$el)

    this.elWidth = this.$el.querySelector('img').offsetWidth
  },
  destroyed() {
    this.observer.disconnect()
  },
  methods: {
    defaultImage() {
      return this.sizes.mini_webp
        ? this.sizes.mini_webp.source_url
        : this.sizes.mini.source_url
    },
    loadMini() {
      return this.defaultImage()
    },
    loadImage() {
      const image = this.format
        ? this.sizes[this.format].source_url
        : this.sizes.full
        ? this.sizes.full.source_url
        : this.sizes.full_webp.source_url

      if (this.loaded) {
        return image
      }

      this.$refs.image.addEventListener('load', () => {
        this.$refs.image.classList.remove('hidden')
        this.$refs.image.classList.remove('loading')
        this.$refs.image.classList.add('loaded')
        this.loaded = true
        this.observer.disconnect()
      })

      return image
    },
  },
}
</script>
<style lang="scss" scoped>
/* picture {
  img {
    transition: all 0.4s ease-in;
    @apply filter blur-lg;
    &.loaded {
      @apply filter blur-0;
    }
    &.no-blur {
      transition: all 0s ease-in;
      filter: blur(0px) !important;
    }
  }
} */
</style>
