<template>
  <div>
    <div
      id="left-sideBar"
      ref="sidebar"
      class="fixed shadow-md inset-y-0 flex bg-white dark:bg-gray-900"
    >
      <div class="p-7 w-64 flex flex-col overflow-y-auto">
        <div class="logo">
          <responsive-image
            class="dark:hidden"
            media-id="10"
            :blur="false"
          ></responsive-image>
          <responsive-image
            class="hidden dark:block"
            media-id="11"
            :blur="false"
          ></responsive-image>
        </div>
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
      <div class="w-14 border-l border-gray-100 dark:border-gray-800"></div>
    </div>
    <div class="min-w-screen min-h-screen flex">
      <div
        id="content-margin"
        class="min-h-screen h-full inline-block"
        :style="sidebarWidth"
      ></div>
      <div id="content" class="items-stretch justify-items-stretch w-full">
        <Nuxt />
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
  },
  mounted() {
    this.offsetWidth = this.$refs.sidebar.offsetWidth
  },
}
</script>

<style lang="scss" scoped>
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
  min-width: 312px;
}
</style>
