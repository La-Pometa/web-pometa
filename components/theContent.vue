<script>
export default {
  props: {
    content: {
      type: String,
      default: null,
    },
  },
  render(h) {
    return h({
      template: `<div>${this.content}</div>`,
    })
  },
}
</script>
