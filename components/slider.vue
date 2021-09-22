<template>
  <div id="slider">
    <slot />
  </div>
</template>
<script>
export default {
  data() {
    return { interval: null }
  },
  mounted() {
    this.interval = setInterval(() => {
      if (!this._isMounted) {
        return
      }
      const actual = document.querySelector('#slider > div:last-child')
      actual.classList.add('opacity-0')
      setTimeout(() => {
        actual.parentElement.prepend(actual)
        actual.classList.remove('opacity-0')
      }, 1000)
    }, 3000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
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
