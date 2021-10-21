<template>
  <div class="team grid md:grid-cols-12 lg:px-20 gap-8">
    <div class="md:col-span-5">
      <div
        v-for="(member, index) in members"
        :id="$content.getPostTitle(member).replace(' ', '-').toLowerCase()"
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
          :href="
            '#' + $content.getPostTitle(member).replace(' ', '-').toLowerCase()
          "
          :data-target="
            '#' + $content.getPostTitle(member).replace(' ', '-').toLowerCase()
          "
          class="no-highlight hover:text-main-dark"
          @click.prevent="toggleItem($event)"
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
  props: {
    members: { type: Array, default: null },
  },
  methods: {
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

<style></style>
