import Vue from 'vue'
import VueGtm from '@gtm-support/vue2-gtm'

export default function ({ app }) {
  Vue.use(VueGtm, {
    id: 'GTM-N6HVNW4',
    defer: true, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
    debug: false,
    enabled: true,
    compatibility: true, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
    vueRouter: app.router,
  })
}
