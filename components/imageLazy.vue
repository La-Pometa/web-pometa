<template>
  <picture v-if="srcset">
    <source v-if="!loaded && lazy" data="mini" :srcset="srcMini" />
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
      :loading="lazy ? 'lazy' : 'default'"
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
      :loading="lazy ? 'lazy' : 'default'"
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
    lazy: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      observer: null,
      intersected: false,
      elCopy: null,
      loaded: false,
      elWidth: 0,
      elHeight: 0,
    }
  },
  computed: {
    getSrcset() {
      if (this._isServer) {
        return this.srcset
      }
      let sets = {}
      let lastKey = false
      for (const [key, src] of Object.entries(this.srcset)) {
        if (src.width <= this.elWidth || src.height <= this.elHeight) {
          if (lastKey) {
            const toSet = Object.entries(this.srcset).filter(
              (x) =>
                x[1].width === this.srcset[lastKey].width &&
                lastKey !== 'mini' &&
                lastKey !== 'mini_webp'
            )
            toSet.forEach((item) => {
              sets[item[0]] = this.srcset[item[0]]
            })

            lastKey = false
          }
          sets[key] = src
        } else {
          lastKey = key
          const [limitKey] = Object.entries(this.srcset)[
            Object.entries(this.srcset).length - 1
          ]
          if (key === limitKey) {
            const toSet = Object.entries(this.srcset).filter(
              (x) =>
                x[1].width === this.srcset[lastKey].width &&
                lastKey !== 'mini' &&
                lastKey !== 'mini_webp'
            )
            toSet.forEach((item) => {
              sets[item[0]] = this.srcset[item[0]]
            })

            lastKey = false
          }
        }

        if (src.mime_type === 'image/gif') {
          sets = {}
        }
      }

      return sets
    },
    srcImage() {
      return this.intersected
        ? this.loadImage()
        : this.lazy
        ? this.loadMini()
        : this.loadImage()
    },
    srcMini() {
      return this.loadMini()
    },
  },
  mounted() {
    if (this.lazy) {
      this.observer = new IntersectionObserver((entries) => {
        const image = entries[0]
        if (image.isIntersecting) {
          this.intersected = true
          this.observer.disconnect()
        }
      })
      this.observer.observe(this.$el)
    }
    this.elWidth = this.$el.querySelector('img').offsetWidth
    this.elHeight = this.$el.querySelector('img').offsetHeight
  },
  destroyed() {
    this.observer.disconnect()
  },
  methods: {
    defaultImage() {
      return this.srcset.mini_webp
        ? this.srcset.mini_webp.source_url
        : this.srcset.mini.source_url
    },
    loadMini() {
      return this.defaultImage()
    },
    loadImage() {
      const image =
        this.format && this.srcset[this.format]
          ? this.srcset[this.format].source_url
          : this.srcset.full
          ? this.srcset.full.source_url
          : this.srcset.full_webp.source_url

      if (this.loaded) {
        return image
      }

      if (this.lazy) {
        this.$refs.image.addEventListener('load', () => {
          this.$refs.image.classList.remove('hidden')
          this.$refs.image.classList.remove('loading')
          this.$refs.image.classList.add('loaded')
          this.loaded = true
          this.observer.disconnect()
        })
      }

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
