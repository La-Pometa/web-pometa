<script>
export default {
  props: {
    postId: {
      type: String,
      default: null,
    },
    pageId: {
      type: String,
      default: null,
    },
    content: {
      type: String,
      default: null,
    },
  },
  data() {
    return { result: '' }
  },
  async fetch() {
    if (this.pageId) {
      this.result = await this.$content.thePageContentById(this.postId)
    } else if (this.postId) {
      this.result = await this.$content.thePostContentById(this.postId)
    }
  },
  render(h) {
    return h({
      template: `<div>${this.result ? this.result : this.content}</div>`,
    })
  },
}
</script>
