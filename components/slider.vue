<template>
  <div id="slider" ref="slider">
    <slot />
  </div>
</template>
<script>
export default {
  data() {
    return { interval: null }
  },
  mounted() {
    this.addInterval()
  },
  beforeDestroy() {
    this.clearInterval()
  },
  methods: {
    clearInterval() {
      clearInterval(this.interval)
    },
    addInterval() {
      document
        .querySelectorAll('#slider > div:not(:last-child)')
        .forEach((el) => {
          el.classList.add('opacity-0')
        })
      this.interval = setInterval(() => {
        if (!this._isMounted) {
          return
        }
        const actual = this.$refs.slider.querySelector('div:last-child')
        const next = actual.previousElementSibling
        next.classList.remove('opacity-0')
        actual.classList.add('opacity-0')
        setTimeout(() => {
          actual.parentElement.prepend(actual)
        }, 1000)
      }, 6000)
    },
  },
}
</script>
<style lang="scss">
#slider {
  & > div {
    @apply placeholder-opacity-100;
    transition: all 0.8s;
  }
}
</style>
