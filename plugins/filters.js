import Vue from 'vue'

export default ({ app }) => {
  Vue.filter('formatDate', (date) => {
    const options = {
      month: 'short',
      year: 'numeric',
    }
    const newDate = new Date(date)

    return newDate.toLocaleDateString(app.i18n.locale, options)
  })
}
