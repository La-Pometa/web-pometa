<script>
export default {
  props: {
    render: {
      type: String,
      default: null,
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
  render(h) {
    return h({
      template: `<${this.tag}>${this.render}</${this.tag}>`,
    })
  },
}
</script>
