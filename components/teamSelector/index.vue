<template>
  <team-selector-inner v-if="members" :members="members"></team-selector-inner>
  <div v-else></div>
</template>

<script>
export default {
  data() {
    return {
      members: [],
    }
  },
  async fetch() {
    this.members = await this.$content.getAllFromType(
      'member',
      1,
      100,
      'menu_order',
      'asc'
    )
  },
}
</script>

<style lang="scss">
.team-selector {
  .member {
    @apply relative text-sm cursor-pointer transition-all duration-300 mb-4;

    & > span {
      @apply font-bold block w-full md:max-w-xs relative transition-all duration-300;
    }

    & > .content {
      @apply pl-2 pt-2 overflow-hidden transition-all duration-300;
      max-height: 100px;
    }

    .arrow {
      @apply absolute top-1/2 right-0 text-sm w-3 transform -translate-y-1/2 transition-all duration-300;
    }

    &.open {
      @apply text-secondary;
    }

    &:not(.open) {
      .content {
        max-height: 0;
      }
      .arrow {
        @apply -rotate-180;
      }
    }
  }
}
</style>
