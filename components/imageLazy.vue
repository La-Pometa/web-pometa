<template>
  <picture>
    <img
      ref="image"
      :src="srcImage"
      :alt="alt"
      :width="width"
      :height="height"
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
  },
  data() {
    return {
      observer: null,
      intersected: false,
      elCopy: null,
    }
  },
  computed: {
    srcImage() {
      return this.intersected ? this.loadImage() : this.loadMini()
    },
  },
  mounted() {
    if (this.blur) {
      this.$refs.image.classList.add('loading')
    }

    this.observer = new IntersectionObserver((entries) => {
      const image = entries[0]
      if (image.isIntersecting) {
        this.intersected = true
        this.observer.disconnect()
      }
    })

    this.observer.observe(this.$el)
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
      this.elCopy = this.$refs.image.cloneNode(true)
      this.elCopy.setAttribute('src', this.defaultImage())

      if (this.blur) {
        this.elCopy.classList.add('loading')
      }

      this.$refs.image.parentElement.appendChild(this.elCopy)
      this.$refs.image.classList.add('hidden')

      this.$refs.image.addEventListener('load', () => {
        this.$refs.image.parentElement.removeChild(this.elCopy)
        this.$refs.image.classList.remove('hidden')
        this.$refs.image.classList.remove('loading')
        this.$refs.image.classList.add('loaded')
      })
      return this.sizes.full_webp
        ? this.sizes.full_webp.source_url
        : this.sizes.full.source_url
    },
  },
}
</script>
