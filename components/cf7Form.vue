<template>
  <the-content ref="form" :content="render" />
</template>
<script>
export default {
  props: {
    render: { type: String, default: null },
  },
  data() {
    return {
      elm: null,
      inputs: [],
      formId: 0,
      submitElm: null,
      acceptanceElm: null,
    }
  },
  mounted() {
    const form = this.$refs.form.$vnode.elm.querySelector('form')
    this.elm = form
    this.submitElm = form.querySelector('[type="submit"]')
    this.acceptanceElm = form.querySelector('.wpcf7-acceptance input')

    if (this.acceptanceElm) {
      this.submitElm.disabled = true

      this.acceptanceElm.addEventListener('change', () => {
        if (this.acceptanceElm.checked) {
          this.submitElm.disabled = false
        } else {
          this.submitElm.disabled = true
        }
      })
    }

    form.addEventListener('submit', async (evt) => {
      evt.preventDefault()
      this.removeAllSpans()
      this.fetchAllInputs()
      this.submitElm.classList.add('loading')
      this.parseResponse(
        await this.$content.postContactForm(this.inputs, this.formId)
      )
      this.submitElm.classList.remove('loading')
    })
  },
  methods: {
    removeAllSpans() {
      this.elm
        .querySelectorAll('span.error_message, span.success_message')
        .forEach((elm) => {
          elm.parentElement.removeChild(elm)
        })
      this.elm.querySelectorAll('.invalid').forEach((elm) => {
        elm.classList.remove('invalid')
      })
    },
    fetchAllInputs() {
      this.inputs = []
      const allFields = this.elm.querySelectorAll(
        'input:not([type="submit"]), textarea, select'
      )
      allFields.forEach((elm) => {
        let field

        if (elm.type === 'checkbox') {
          if (elm.checked) {
            field = { name: elm.name, value: elm.value }
          } else {
            return
          }
        } else {
          field = { name: elm.name, value: elm.value }
        }

        if (field.name === '_wpcf7') {
          this.formId = parseInt(field.value)
        }

        this.inputs.push(field)
      })
    },
    parseResponse(res) {
      if (res.status === 'validation_failed') {
        res.invalid_fields.forEach((field) => {
          field.elm = this.elm.querySelector(field.into + '> *')

          const errorSpan = document.createElement('span')
          errorSpan.innerHTML = field.message
          errorSpan.classList.add('error_message')
          field.elm.parentElement.appendChild(errorSpan)

          field.elm.classList.add('invalid')
          field.elm.addEventListener('focus', () => {
            field.elm.classList.remove('invalid')
            field.elm.parentElement.removeChild(errorSpan)
          })
        })
      } else if (this.submitElm) {
        this.elm.reset()
        const successSpan = document.createElement('span')
        successSpan.innerHTML = res.message
        successSpan.classList.add('success_message')
        this.submitElm.parentElement.appendChild(successSpan)
        setTimeout(() => {
          this.submitElm.parentElement.removeChild(successSpan)
        }, 3000)
      }
    },
  },
}
</script>
<style lang="scss">
#left-form {
  [type='text'],
  [type='email'],
  [type='url'],
  [type='password'],
  [type='number'],
  [type='date'],
  [type='datetime-local'],
  [type='month'],
  [type='search'],
  [type='tel'],
  [type='time'],
  [type='week'],
  [multiple],
  textarea,
  select {
    max-width: 100%;
    @apply w-full dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-white rounded-sm border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50;

    &.invalid {
      @apply bg-red-600 bg-opacity-10 border-red-400 ring ring-red-400 ring-opacity-50;
    }
  }
  .error_message {
    @apply text-xs text-red-600 mt-2 block;
  }
  .success_message {
    @apply text-xs text-green-500 mt-3 block;
  }
  textarea {
    @apply resize-none h-32;
  }
  .lopd {
    @apply text-justify;
    font-size: 0.65rem /* 12px */;
    line-height: 0.75rem /* 16px */;
  }
  [type='checkbox'] {
    @apply rounded-sm border-gray-300 dark:border-gray-600 dark:bg-gray-900  text-primary shadow-sm focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50 mr-2;

    & ~ span {
      @apply text-sm;
    }
  }
  [type='submit'] {
    @apply w-full relative outline-none py-2 cursor-pointer hover:bg-primary dark:hover:text-main-dark transition-all rounded-sm bg-gray-100 dark:border-gray-600 dark:bg-gray-900 shadow-sm focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50;

    &.loading {
      @apply bg-primary transition-all text-main-dark;
      animation: bg-fade 0.8s ease-in infinite;
    }

    &[disabled] {
      @apply pointer-events-none opacity-50;
    }
  }
  .lopd ~ span {
    @apply text-sm;
  }
  .info {
    @apply text-sm opacity-50;
  }
}

@keyframes bg-fade {
  0% {
    @apply opacity-100;
    transform: scale(1);
  }
  50% {
    @apply opacity-50;
    transform: scale(0.97);
  }
  100% {
    @apply opacity-100;
    transform: scale(1);
  }
}
</style>
