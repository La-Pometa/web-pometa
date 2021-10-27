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

    <the-content
      id="page-pometa-content"
      :content="pageContent"
      class="container-1024 mx-auto margins-header space-y-10"
    ></the-content>
    <!--     <the-content v-if="pageContent" :content="pageContent" />
 -->
  </section>
</template>
<script>
export default {
  name: 'Pometa',
  async asyncData({ $content }) {
    const pageData = await $content.getSingleTypeByPath('pometa')
    const pageContent = pageData.content.rendered

    return { pageContent, pageData }
  },
  head() {
    return {
      title: this.$content.getPostHeadTitle(this.pageData),
      meta: [...this.$content.getPostMetaSeo(this.pageData)],
    }
  },
}
</script>
<style lang="scss">
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

  .bottom-cols {
    @apply grid grid-cols-1 sm:grid-cols-2 gap-10;

    h3 {
      @apply text-3xl mb-5 font-bold text-center;
    }
    p {
      @apply text-center;
    }
    .slick-dots li button:before {
      @apply dark:text-white;
    }
    .slick-slide {
      @apply p-2 dark:filter invert;

      img {
        @apply select-none pointer-events-none;
      }
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
