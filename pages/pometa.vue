<template>
  <section id="page-pometa">
    <parallax-header :image="pageData.featured_source" class="relative">
      <div
        class="header-text absolute bottom-0 left-1/2 tranform -translate-x-1/2"
      >
        <span class="text-shadow">Fresh ideas</span>
        <span class="text-shadow">for new times</span>
      </div>
    </parallax-header>
    <section
      id="page-pometa-content"
      class="container-1024 mx-auto margins-header space-y-10"
    >
      <div class="title">
        <h1>Somos tu agencia creativa.</h1>
        <h2>
          Todo un equipo con experiencia en diseño gráfico, publicidad y
          marketing para tu empresa.
        </h2>
      </div>
      <div class="team grid md:grid-cols-12 lg:px-20 gap-8">
        <div class="md:col-span-5">
          <div class="left-image">
            <img
              src="https://www.lapometa.com/wp-content/uploads/2015/02/laia.jpg"
              alt=""
            />
            <span>Marketer y Community Manager</span>
          </div>
        </div>
        <div class="md:col-span-7 space-y-8">
          <h2 class="font-butler font-bold text-3xl">
            ¡Conoce a nuestro equipo!
          </h2>
          <p>
            Más del 90% de nuestro trabajo creativo es interno, no lo
            subcontratamos. Somos especialistas en encontrar aquel punto que os
            diferencia del resto y crear imagen de marca, ¿te apuntas?
          </p>
          <div class="team-selector flex flex-col">
            <a href="#laia-rogel" class="no-highlight hover:text-main-dark">
              <div class="member open">
                <span
                  >Laia Rogel <fa class="arrow" :icon="['fas', 'chevron-up']"
                /></span>
                <div class="content">
                  Licenciada en Bellas Artes por la UB. Máster en Estrategias de
                  Comunicación y Publicidad por ELISAVA. Executive MBA EAE
                  Business School
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!--     <the-content v-if="pageContent" :content="pageContent" />
 -->
  </section>
</template>
<script>
export default {
  name: 'Contact',
  async asyncData({ $content }) {
    const pageData = await $content.getSingleTypeByPath('pometa')
    const pageContent = pageData.content.rendered

    return { pageContent, pageData }
  },
  head() {
    return {
      title: this.$content.getPostMetaSeo(this.pageData, 'title'),
    }
  },
  mounted() {
    document.querySelectorAll('.member').forEach((member) => {
      member.addEventListener('click', () => {
        member.classList.toggle('open')
      })
    })
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
.header-text {
  @apply mb-14 flex flex-col items-center space-y-1;
  span {
    @apply font-butler font-bold text-6xl msm:text-5xl whitespace-nowrap text-white block bg-primary bg-opacity-80 backdrop-filter backdrop-blur px-6 msm:px-3 py-2 msm:py-1;
  }
}
#page-pometa-content {
  .title {
    @apply md:px-20;
    * {
      @apply font-sset font-normal text-2xl;
    }
  }

  .left-image {
    @apply relative;

    img {
      @apply w-full;
    }

    span {
      @apply text-main-dark absolute bottom-0 inset-x-0 m-8 bg-primary bg-opacity-80 backdrop-filter backdrop-blur backdrop-saturate-150 text-sm text-center font-bold p-3;
    }
  }
}
#page-pometa {
  @screen sm {
    #header-image {
      @apply aspect-w-14 aspect-h-6;
    }
  }

  #header-image {
    img {
      @apply filter grayscale;
    }
  }
}
#contact-page {
  #grid {
    @apply grid grid-cols-1 lg:grid-cols-12 mt-10 gap-8;

    .left-sidebar {
      @apply lg:col-span-4 space-y-5;
    }

    .content {
      @apply lg:col-span-8;
    }

    .cf7-form [type='submit'] {
      @apply w-auto block px-8 ml-auto;
    }
  }
}
</style>
