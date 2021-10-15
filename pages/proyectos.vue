<template>
  <section
    id="projectsArchive"
    class="
      grid
      lg:grid-cols-3
      msm:grid-cols-1
      sm:grid-cols-2
      msm:margins msm:container msm:mx-auto msm:mt-14 msm:gap-3
    "
  >
    <nuxt-link
      v-for="project in projects"
      :key="project.id"
      :to="localePath(`/${project.slug}`)"
      class="
        hover:text-main-dark
        dark:hover:text-white
        no-highlight
        aspect-w-9 aspect-h-11
        project-wrapper
      "
      :title="project.title.rendered"
    >
      <div class="project-card">
        <div v-if="project.featured_source.sizes" class="project-card-img">
          <responsive-image
            :sizes="project.featured_source.sizes"
            :alt="project.featured_source.alt"
            :width="project.featured_source.width"
            :height="project.featured_source.height"
          ></responsive-image>
        </div>
        <div class="overlay">
          <div class="inner">
            <h4>{{ project.title.rendered }}</h4>
            <the-content
              v-for="(tax, index) in project.tax_info"
              :key="tax.term_id"
              class="inline taxs"
              :content="(index != 0 ? ', ' : '') + tax.name"
            ></the-content>
          </div>
        </div>
      </div>
    </nuxt-link>
  </section>
</template>
<script>
export default {
  name: 'ProjectsArchive',
  data() {
    return {
      projects: [],
    }
  },
  async fetch() {
    await this.$content.getAllFromType('portfolio', 1, 100).then((res) => {
      this.projects.push(...res)
    })
  },
  head() {
    return {
      title: this.$content.getTitle(this.$t('projects')),
    }
  },
}
</script>
<style lang="scss">
#projectsArchive {
  .project-card {
    @apply h-full w-full;

    .overlay {
      @apply absolute opacity-0 hover:opacity-100 msm:opacity-100 inset-0 transition-all duration-300;

      .inner {
        @apply transition-all duration-300 bg-white absolute bottom-10 msm:bottom-0 msm:w-full block left-1/2 transform -translate-x-1/2 text-center p-5 msm:border msm:border-primary;

        h4 {
          @apply font-butler text-3xl;
        }

        .taxs {
          @apply font-medium text-secondary;
        }
      }
    }

    &:hover {
      .project-card-img img {
        @apply filter grayscale-0;
      }
    }

    .project-card-img {
      img {
        @apply absolute top-0 left-0 w-full h-full object-cover filter sm:grayscale transition-all duration-300;
      }
    }
  }
}
</style>
