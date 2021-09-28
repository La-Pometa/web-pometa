import Vue from 'vue'

Vue.filter('formatDate', (date) => {
  const options = {
    month: 'short',
    year: 'numeric',
  }
  const newDate = new Date(date)

  return newDate.toLocaleDateString('es', options)
})
