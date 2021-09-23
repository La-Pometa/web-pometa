<template>
  <div>
    <div
      id="wrapper"
      ref="wrapper"
      class="transition-all min-w-screen min-h-screen flex"
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
          class="transition-all fixed inset-y-0 flex bg-white dark:bg-gray-900"
        >
          <div class="p-7 w-64 flex flex-col overflow-y-auto">
            <nuxt-link to="/">
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
            <nav id="menu" class="flex flex-col mt-7 font-medium text-xs gap-3">
              <span><nuxt-link to="/">Inicio</nuxt-link></span>
              <span><a href="#">¡La Pometa!</a></span>
              <span><a href="#">Proyectos</a></span>
              <span
                ><a>Somos especialistas en...</a>
                <div class="sub-menu">
                  <div class="item">
                    <a href="#">Departamento de marketing externo</a>
                  </div>
                  <div class="item">
                    <a href="#">Diseño gráfico</a>
                  </div>
                  <div class="item">
                    <a href="#">Diseño páginas web</a>
                  </div>
                  <div class="item">
                    <a href="#">Publicidad online y offline</a>
                  </div>
                </div>
              </span>
              <span><nuxt-link to="/blog">Blog</nuxt-link></span>
              <span><a href="#">Contacto</a></span>
              <span><a href="#">Desayuna con manzanas</a></span>
            </nav>
            <footer class="mt-auto flex flex-col gap-4">
              <div id="social" class="flex gap-3 justify-center">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
              </div>
              <div
                id="info"
                class="flex flex-col gap-2 text-center text-xs font-thin"
              >
                <a href="https://www.lapometa.com/contacto/"
                  >Oficinas en Lleida y Terrassa (BCN)</a
                >
                <a href="mailto:info@lapometa.com">info@lapometa.com</a>
                <span>T:<a href="tel:+34973282570">(+34) 973 28 25 70</a></span>
              </div>
              <div
                id="footer-menu"
                class="flex flex-col text-center text-xs font-bold"
              >
                <a href="#">Política de Privacidad</a>
                <a href="#">Política de Cookies</a>
                <a href="#">Aviso legal</a>
                <a href="#">Mapa del sitio</a>
              </div>
            </footer>
          </div>
        </div>
        <div
          id="content-margin"
          class="transition-all min-h-screen h-full inline-block"
          :style="sidebarWidth"
        ></div>
        <div
          id="sidebar-visible"
          class="
            shadow-md
            border-l border-gray-100
            dark:border-gray-800 dark:bg-gray-900
            p-3
            transition-all
          "
        >
          <div class="logo-mini transition-all">
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
        id="content"
        class="
          items-stretch
          justify-items-stretch
          w-full
          mmd:min-w-screen
          relative
        "
      >
        <div
          id="sidebarToggler"
          ref="sidebarToggler"
          class="
            sm:opacity-0 sm:pointer-events-none
            absolute
            top-0
            left-0
            z-10
            text-white
            w-14
            h-14
            flex
            items-center
            justify-center
            text-xl
            bg-main-dark
            transition-all
          "
          @click="toggleSidebar"
        >
          <i class="fas fa-bars"></i>
        </div>
        <div class="w-full h-full" @click="removeSidebar"><Nuxt /></div>
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
      return this.$route.path === '/' ? 'stick' : ''
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
* {
  transition-duration: 0.4s !important;
}
@media (max-width: 639px) {
  #wrapper.open {
    #sidebarToggler {
      transform: translateX(-100%);
    }
  }
  #content {
    flex: 0 0 100vw;
  }
  #wrapper:not(.open) {
    #sidebar-wrapper {
      pointer-events: none;
    }
    #sidebar-visible {
      flex: 0 0 0;
      width: 0;
      padding: 0;
      border: 0;
    }
  }
}
#sidebar-wrapper {
  @apply transition-all;
}

#sidebar-visible {
  flex: 0 0 3.5rem;
  width: 3.5rem;
}
#wrapper {
  max-width: 100vw;
  overflow: hidden;
}
#wrapper:not(.open) {
  @apply transition-all;

  #sidebar-wrapper:not(:hover):not(.stick) {
    .logo-mini {
      @apply opacity-100;
    }
    #content-margin {
      flex: 0 0 0rem !important;
      min-width: 0 !important;
      width: 0;
    }
    #left-sideBar {
      @apply transform -translate-x-full;
    }
  }

  &:hover {
    .logo-mini {
      @apply opacity-0;
    }
  }
  .stick {
    .logo-mini {
      @apply opacity-0;
    }
  }
  #sidebar-wrapper:not(:hover):not(.open).stick {
    @media (max-width: 1279px) {
      .logo-mini {
        @apply opacity-100;
      }
      #content-margin {
        flex: 0 0 0 !important;
        min-width: 0 !important;
        width: 0;
      }
      #left-sideBar {
        @apply transform -translate-x-full;
      }
    }
  }
}
#menu {
  & > span {
    a {
      @apply transition-all hover:text-primary;
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
      @apply transition-all ml-3 h-full flex flex-col gap-3 max-h-0 overflow-hidden opacity-0;
      transition-duration: 500ms;
    }
  }
}
#content-margin {
  @apply transition-all;
  min-width: 256px;
}
#content {
  @apply transition-all;
}
</style>
