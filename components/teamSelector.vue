<template>
  <div class="team grid md:grid-cols-12 lg:px-20 gap-8">
    <div class="md:col-span-5">
      <div
        v-for="(member, index) in members"
        :id="generateId($content.getPostTitle(member))"
        :key="member.title.rendered"
        :class="index == 0 ? '' : 'hidden'"
        class="left-image"
      >
        <responsive-image :image-data="member.featured_source" />
        <span>{{ $content.getPostMeta(member, 'members_title') }}</span>
      </div>
    </div>
    <div class="md:col-span-7 space-y-8">
      <h2 class="font-butler font-bold text-3xl">¡Conoce a nuestro equipo!</h2>
      <p>
        Más del 90% de nuestro trabajo creativo es interno, no lo
        subcontratamos. Somos especialistas en encontrar aquel punto que os
        diferencia del resto y crear imagen de marca, ¿te apuntas?
      </p>
      <div class="team-selector flex flex-col">
        <a
          v-for="(member, index) in members"
          :key="member.title.rendered"
          :href="'#' + generateId($content.getPostTitle(member))"
          :data-target="'#' + generateId($content.getPostTitle(member))"
          class="no-highlight hover:text-main-dark"
          @click="toggleItem($event)"
        >
          <div class="member" :class="index == 0 ? 'open' : ''">
            <span
              >{{ $content.getPostTitle(member) }}
              <fa class="arrow" :icon="['fas', 'chevron-up']"
            /></span>
            <div class="content">
              <the-content :content="$content.getPostContent(member)" />
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
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
  mounted() {
    const hash = window.location.hash
    let firstTarget = null
    if (hash) {
      firstTarget = document.querySelector(`[data-target="${hash}"] .member`)

      if (!firstTarget) {
        return
      }

      firstTarget.classList.add('open')

      document.querySelectorAll('.left-image').forEach((image) => {
        image.classList.add('hidden')
      })

      document
        .querySelector(firstTarget.parentElement.dataset.target)
        .classList.remove('hidden')

      document.querySelectorAll('.member').forEach((member) => {
        member.classList.remove('open')
      })
      firstTarget.parentElement
        .querySelector('.member')
        .classList.toggle('open')
    }
  },
  methods: {
    generateId(string) {
      return string
        .replace(' ', '-')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036F]/g, '')
    },
    toggleItem(event) {
      const member = event.target.closest('a')

      document.querySelectorAll('.left-image').forEach((image) => {
        image.classList.add('hidden')
      })

      document.querySelector(member.dataset.target).classList.remove('hidden')

      document.querySelectorAll('.member').forEach((member) => {
        member.classList.remove('open')
      })
      member.querySelector('.member').classList.toggle('open')
    },
  },
}
</script>

<style lang="scss">
.team-selector {
  * {
    transition-timing-function: linear !important;
  }
  .member {
    @apply relative text-sm cursor-pointer transition-all duration-300 mb-4;

    & > span {
      @apply font-bold block w-full md:max-w-xs relative transition-all duration-300;
    }

    & > .content {
      @apply pl-2 pt-2 overflow-hidden transition-all duration-300;
      max-height: 85px;
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
