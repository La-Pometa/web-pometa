<template>
  <div>
    <div
      id="wrapper"
      ref="wrapper"
      class="transition-all duration-500 min-w-screen h-screen flex"
    >
      <div
        id="sidebar-wrapper"
        ref="sidebarWrapper"
        class="flex min-h-screen"
        :class="stick"
      >
        <div
          id="left-sideBar"
          ref="sidebar"
          class="
            transition-all
            duration-500
            fixed
            inset-y-0
            flex
            bg-white
            dark:bg-gray-900
            z-20
          "
        >
          <div id="left-sidebar-content" class="p-7 msm:p-5 w-64 flex flex-col">
            <nuxt-link :to="localePath('/')">
              <div v-if="$i18n.locale == 'ca'" class="logo cat">
                <div class="responsive-image">
                  <img
                    class="dark:hidden"
                    alt="logo la pometa"
                    :width="300"
                    :height="82"
                    src="@/assets/img/logos-pometa-cat.svg"
                  />
                </div>
                <div class="responsive-image">
                  <img
                    class="hidden dark:block"
                    alt="logo la pometa"
                    :width="300"
                    :height="82"
                    src="@/assets/img/logos-pometa-cat-white.svg"
                  />
                </div>
              </div>
              <div v-if="$i18n.locale == 'es'" class="logo esp">
                <div class="responsive-image">
                  <img
                    class="dark:hidden"
                    alt="logo la pometa"
                    :width="300"
                    :height="82"
                    src="@/assets/img/logos-pometa-esp.svg"
                  />
                </div>
                <div class="responsive-image">
                  <img
                    class="hidden dark:block"
                    alt="logo la pometa"
                    :width="300"
                    :height="82"
                    src="@/assets/img/logos-pometa-esp-white.svg"
                  />
                </div>
              </div>
            </nuxt-link>
            <nav id="menu" class="flex flex-col mt-7 font-medium text-xs gap-4">
              <span tabindex="0"
                ><nuxt-link :to="localePath('/')">{{
                  $t('home')
                }}</nuxt-link></span
              >
              <span tabindex="0"
                ><nuxt-link :to="localePath('/pometa')">{{
                  $t('laPometa')
                }}</nuxt-link></span
              >
              <span tabindex="0"
                ><nuxt-link :to="localePath('/proyectos')">{{
                  $t('projects')
                }}</nuxt-link></span
              >
              <span tabindex="0"
                ><a class="not-click">{{ $t('special') }}</a>
                <div class="sub-menu">
                  <div class="item">
                    <nuxt-link :to="localePath($t('marketing').link)">{{
                      $t('marketing').text
                    }}</nuxt-link>
                  </div>
                  <div class="item">
                    <nuxt-link :to="localePath($t('design').link)">{{
                      $t('design').text
                    }}</nuxt-link>
                  </div>
                  <div class="item">
                    <nuxt-link :to="localePath($t('web').link)">{{
                      $t('web').text
                    }}</nuxt-link>
                  </div>
                  <div class="item">
                    <nuxt-link :to="localePath($t('publicity').link)">{{
                      $t('publicity').text
                    }}</nuxt-link>
                  </div>
                </div>
              </span>
              <span tabindex="0"
                ><nuxt-link :to="localePath('/blog')">{{
                  $t('blog')
                }}</nuxt-link></span
              >
              <span tabindex="0"
                ><nuxt-link :to="localePath($t('contact').link)">{{
                  $t('contact').text
                }}</nuxt-link></span
              >
              <span tabindex="0"
                ><nuxt-link :to="localePath($t('breakfast').link)">{{
                  $t('breakfast').text
                }}</nuxt-link></span
              >
              <span tabindex="0" class="featured-item"
                ><nuxt-link :to="localePath($t('kitdigital').link)">{{
                  $t('kitdigital').text
                }}</nuxt-link></span
              >
            </nav>
            <footer class="mt-auto flex flex-col gap-4 pt-10">
              <social-links class="justify-center" />
              <div
                id="info"
                class="flex flex-col gap-2 text-center text-xs font-thin"
              >
                <nuxt-link :to="localePath('/contacto')">{{
                  $t('oficinas')
                }}</nuxt-link>
                <a href="mailto:info@lapometa.com">info@lapometa.com</a>
                <span>T:<a href="tel:+34973282570">(+34) 973 28 25 70</a></span>
              </div>
              <div
                id="footer-menu"
                class="flex flex-col text-center text-xs font-bold"
              >
                <nuxt-link :to="localePath($t('privacidad').link)">{{
                  $t('privacidad').text
                }}</nuxt-link>
                <nuxt-link :to="localePath($t('cookies').link)">{{
                  $t('cookies').text
                }}</nuxt-link>
                <nuxt-link :to="localePath($t('aviso').link)">{{
                  $t('aviso').text
                }}</nuxt-link>
                <nuxt-link :to="localePath($t('map').link)">{{
                  $t('map').text
                }}</nuxt-link>
              </div>
            </footer>
          </div>
          <div
            id="sidebar-visible"
            class="
              border-l border-gray-100
              dark:border-gray-800
              bg-white
              dark:bg-gray-900
              px-3
              transition-all
              duration-500
              relative
              z-10
            "
          >
            <div
              id="sidebarToggler"
              ref="sidebarToggler"
              class="
                sm:opacity-0 sm:pointer-events-none
                absolute
                top-0
                -left-px
                text-white
                w-14
                h-14
                flex
                items-center
                justify-center
                text-xl
                bg-main-dark
                transition-all
                duration-500
                z-20
              "
              @click="toggleSidebar"
            >
              <div class="burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div
              id="visible-content"
              class="
                transition-all
                duration-500
                h-screen
                flex
                items-center
                justify-center
                sticky
                top-0
              "
            >
              <div class="grid items-center justify-items-center gap-5">
                <nuxt-link
                  v-if="$i18n.locale == 'ca'"
                  :to="switchLocalePath('es')"
                  >ES</nuxt-link
                >
                <nuxt-link v-else :to="switchLocalePath('ca')">CA</nuxt-link>
                <div class="msm:hidden cursor-pointer">
                  <div class="burger black small">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <nuxt-link :to="localePath('/desayuna-con-manzanas')">
                  <div class="taza responsive-image w-6">
                    <img
                      class="dark:hidden"
                      alt="desayuno con manzanas"
                      :width="141"
                      :height="113"
                      src="@/assets/img/taza_pometa.svg"
                    />
                    <!--                     <img
                      class="hover dark:hidden"
                      alt="desayuno con manzanas"
                      :width="141"
                      :height="113"
                      src="@/assets/img/taza_pometa_hover.svg"
                    /> -->
                    <img
                      class="hidden dark:block"
                      alt="desayuno con manzanas"
                      :width="141"
                      :height="113"
                      src="@/assets/img/taza_pometa_white.svg"
                    />
                    <!--                     <img
                      class="hover hidden dark:block"
                      alt="desayuno con manzanas"
                      :width="141"
                      :height="113"
                      src="@/assets/img/taza_pometa_white_hover.svg"
                    /> -->
                  </div></nuxt-link
                >
              </div>
            </div>

            <div
              class="
                logo-mini
                transition-all
                duration-500
                absolute
                top-3
                left-1/2
                transform
                -translate-x-1/2
                msm:hidden
              "
            >
              <div class="responsive-image">
                <img
                  class="dark:hidden"
                  alt="logo la pometa"
                  :width="221"
                  :height="300"
                  src="@/assets/img/anagrama-pometa.svg"
                />
              </div>
              <div class="responsive-image">
                <img
                  class="hidden dark:block"
                  alt="logo la pometa"
                  :width="221"
                  :height="300"
                  src="@/assets/img/anagrama-pometa-white.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="content-margin"
          class="transition-all duration-500 min-h-screen h-full inline-block"
          :style="sidebarWidth"
        ></div>
      </div>
      <div
        id="content"
        class="
          items-stretch
          justify-items-stretch
          w-full
          mmd:min-w-screen
          relative
        "
      >
        <div class="w-full h-full" @click="removeSidebar">
          <Nuxt keep-alive />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      offsetWidth: 0,
    }
  },
  computed: {
    sidebarWidth() {
      return `flex: 0 0 ${this.offsetWidth}px;`
    },
    stick() {
      if (!this.$route.name) {
        return
      }
      return this.$route.name.startsWith('index') ? 'stick' : ''
    },
  },
  watch: {
    $route() {
      this.$refs.wrapper.classList.remove('open')
    },
  },
  mounted() {
    this.offsetWidth = this.$refs.sidebar.offsetWidth
  },
  methods: {
    toggleSidebar() {
      this.$refs.wrapper.classList.toggle('open')
    },
    removeSidebar() {
      this.$refs.wrapper.classList.remove('open')
    },
  },
}
</script>
<style lang="scss" scoped>
.featured-item a {
  @apply bg-primary py-0.5 px-2 hover:bg-gray-700 font-bold text-main-dark;
}
@media (max-width: 639px) {
  #content {
    flex: 0 0 100vw;
  }
  #wrapper {
    #content-margin {
      min-width: 0 !important;
    }
  }
  #wrapper:not(.open) {
    #sidebarToggler {
      @apply transform translate-x-full;
    }
    #sidebar-wrapper {
      #left-sideBar {
        transform: translateX(-100%);
      }
    }
  }
  #wrapper.open {
    #content {
      transform: translateX(calc(3.5rem + 16rem));
    }
    #left-sideBar {
      transform: translateX(0);
    }
  }
}

@media (min-width: 640px) {
  #wrapper:not(.open) {
    #sidebar-wrapper:not(.stick) {
      #left-sideBar {
        transform: translateX(-16rem);
      }

      &:hover {
        #left-sideBar {
          transform: translateX(0);
        }
      }

      &:not(:hover) {
        #content-margin {
          min-width: 3.5rem;
        }
      }

      &:not(:hover) {
        .logo-mini {
          @apply opacity-100;
        }
      }
    }
  }
}

#sidebar-wrapper {
  @apply transition-all duration-500  bg-white dark:bg-gray-900;
}

#sidebar-visible {
  flex: 0 0 3.5rem;
  width: 3.5rem;
}
#wrapper {
  max-width: 100vw;
  .logo-mini {
    @apply opacity-0;
  }
}
.burger {
  @apply flex flex-col space-y-2;
  span {
    @apply bg-white;
    width: 2rem;
    height: 2px;
  }

  &.small {
    @apply space-y-1;
    span {
      width: 1.5rem;
      height: 2px;
    }
  }
  &.black {
    span {
      @apply bg-main-dark dark:bg-white;
    }
  }

  &:hover {
    span {
      @apply bg-primary;
    }
  }
}
#menu {
  & > span {
    a,
    span {
      @apply transition-all duration-500  hover:text-primary;
    }

    .not-click {
      @apply transition-all duration-500  hover:text-primary uppercase cursor-pointer;
    }

    & > a {
      @apply uppercase cursor-pointer;
    }

    &:hover {
      .sub-menu {
        @apply max-h-96 pt-5 pb-3 opacity-100;
      }
    }

    .sub-menu {
      @apply transition-all duration-500  ml-3 h-full flex flex-col gap-3 max-h-0 overflow-hidden opacity-0;
    }
  }
}
#content-margin {
  @apply transition-all duration-500;
  min-width: 312px;
}
#content {
  @apply transition-all duration-500;
}
#left-sideBar {
  box-shadow: 0 0 0 1px rgba(122, 122, 122, 0.1);
}
/* .taza {
  &:not(:hover) {
    .hover {
      @apply hidden;
    }
  }
  &:hover {
    & > *:not(.hover) {
      @apply hidden;
    }
  }
} */
</style>
