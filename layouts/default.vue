<template>
  <div>
    <div
      id="wrapper"
      ref="wrapper"
      class="
        transition-all
        duration-500
        min-w-screen min-h-screen
        flex
        msm:overflow-hidden
      "
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
          <div
            id="left-sidebar-content"
            class="p-7 msm:p-5 w-64 flex flex-col overflow-y-auto"
          >
            <nuxt-link :to="localePath('/')">
              <div class="logo">
                <div class="responsive-image">
                  <image-lazy
                    class="dark:hidden"
                    alt="logo la pometa"
                    :width="300"
                    :height="82"
                    :sizes="{
                      full_webp: {
                        source_url:
                          'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/logos-pometa-cat.png.webp',
                      },
                      mini: {
                        source_url:
                          'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/logos-pometa-cat-40x11.png',
                      },
                      mini_webp: {
                        source_url:
                          'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/logos-pometa-cat-40x11.png.webp',
                      },
                      full: {
                        source_url:
                          'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/logos-pometa-cat.png',
                      },
                    }"
                    :blur="false"
                  ></image-lazy>
                </div>
                <div class="responsive-image">
                  <image-lazy
                    class="hidden dark:block"
                    alt="logo la pometa"
                    :width="300"
                    :height="82"
                    :sizes="{
                      full: {
                        source_url:
                          'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/pometa_logo_white_cat-300x80.png',
                      },
                      full_webp: {
                        source_url:
                          'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/pometa_logo_white_cat-300x80.png.webp',
                      },
                      mini: {
                        source_url:
                          'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/pometa_logo_white_cat-40x11.png',
                      },
                      mini_webp: {
                        source_url:
                          'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/pometa_logo_white_cat-40x11.png.webp',
                      },
                    }"
                    :blur="false"
                  ></image-lazy>
                </div>
              </div>
            </nuxt-link>
            <nav id="menu" class="flex flex-col mt-7 font-medium text-xs gap-4">
              <span
                ><nuxt-link :to="localePath('/')">{{
                  $t('home')
                }}</nuxt-link></span
              >
              <span
                ><nuxt-link :to="localePath('/pometa')">{{
                  $t('laPometa')
                }}</nuxt-link></span
              >
              <span
                ><nuxt-link :to="localePath('/proyectos')">{{
                  $t('projects')
                }}</nuxt-link></span
              >
              <span
                ><a class="not-click" href="#">{{ $t('special') }}</a>
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
              <span
                ><nuxt-link :to="localePath('/blog')">{{
                  $t('blog')
                }}</nuxt-link></span
              >
              <span
                ><nuxt-link :to="localePath('/contacto')">{{
                  $t('contact')
                }}</nuxt-link></span
              >
              <span
                ><nuxt-link :to="localePath('/desayuna-con-manzanas')">{{
                  $t('breakfast')
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
                <a href="#">{{ $t('privacidad') }}</a>
                <a href="#">{{ $t('cookies') }}</a>
                <a href="#">{{ $t('aviso') }}</a>
                <a href="#">{{ $t('map') }}</a>
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
                <a href="#" class="msm:hidden">
                  <div class="burger black small">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </a>
                <nuxt-link :to="localePath('/desayuna-con-manzanas')">
                  <div class="responsive-image w-6">
                    <image-lazy
                      class="dark:hidden"
                      alt="desayuno con manzanas"
                      :width="141"
                      :height="113"
                      :sizes="{
                        full_webp: {
                          source_url:
                            'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/taza_pometa_black.png.webp',
                        },
                        mini: {
                          source_url:
                            'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/taza_pometa_black-40x32.png',
                        },
                        mini_webp: {
                          source_url:
                            'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/taza_pometa_black-40x32.png.webp',
                        },
                        full: {
                          source_url:
                            'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/taza_pometa_black.png',
                        },
                      }"
                      :blur="false"
                    ></image-lazy>
                    <image-lazy
                      class="hidden dark:block"
                      alt="desayuno con manzanas"
                      :width="141"
                      :height="113"
                      :sizes="{
                        full_webp: {
                          source_url:
                            'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/taza_pometa.png.webp',
                        },
                        mini: {
                          source_url:
                            'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/taza_pometa-40x32.png',
                        },
                        mini_webp: {
                          source_url:
                            'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/taza_pometa-40x32.png.webp',
                        },
                        full: {
                          source_url:
                            'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/taza_pometa.png',
                        },
                      }"
                      :blur="false"
                    ></image-lazy></div
                ></nuxt-link>
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
                <image-lazy
                  class="dark:hidden"
                  alt="logo la pometa"
                  :width="221"
                  :height="300"
                  :sizes="{
                    full: {
                      file: 'anagrama_pometa_black-221x300.png',
                      width: 221,
                      height: 300,
                      mime_type: 'image\/png',
                      source_url:
                        'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/anagrama_pometa_black-221x300.png',
                    },
                    full_webp: {
                      file: 'anagrama_pometa_black-221x300.png.webp',
                      width: 221,
                      height: 300,
                      mime_type: 'image\/webp',
                      source_url:
                        'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/anagrama_pometa_black-221x300.png.webp',
                    },
                    mini: {
                      file: 'anagrama_pometa_black-29x40.png',
                      width: 29,
                      height: 40,
                      mime_type: 'image\/png',
                      source_url:
                        'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/anagrama_pometa_black-29x40.png',
                    },
                    mini_webp: {
                      file: 'anagrama_pometa_black-29x40.png.webp',
                      width: 29,
                      height: 40,
                      mime_type: 'image\/webp',
                      source_url:
                        'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/anagrama_pometa_black-29x40.png.webp',
                    },
                  }"
                  :blur="false"
                ></image-lazy>
              </div>
              <div class="responsive-image">
                <image-lazy
                  class="hidden dark:block"
                  alt="logo la pometa"
                  :width="221"
                  :height="300"
                  :sizes="{
                    full: {
                      source_url:
                        'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/anagrama_pometa_white-221x300.png',
                    },
                    full_webp: {
                      source_url:
                        'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/anagrama_pometa_white-221x300.png.webp',
                    },
                    mini: {
                      source_url:
                        'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/anagrama_pometa_white-29x40.png',
                    },
                    mini_webp: {
                      source_url:
                        'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/09\/anagrama_pometa_white-29x40.png.webp',
                    },
                  }"
                  :blur="false"
                ></image-lazy>
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
import imageLazy from '~/components/imageLazy.vue'
export default {
  components: { imageLazy },
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
</style>
