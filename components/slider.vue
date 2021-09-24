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
    document
      .querySelectorAll('#slider > div:not(:last-child)')
      .forEach((el) => {
        el.classList.add('opacity-0')
      })
    this.interval = setInterval(() => {
      if (!this._isMounted) {
        return
      }
      const actual = document.querySelector('#slider > div:last-child')
      const next = actual.previousElementSibling
      next.classList.remove('opacity-0')
      actual.classList.add('opacity-0')
      setTimeout(() => {
        actual.parentElement.prepend(actual)
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
