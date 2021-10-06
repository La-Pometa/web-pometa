class Post {
  [x: string]: any

  constructor(options: Object) {
    Object.assign(this, options)
  }

  public getMeta(meta: string): any | null {
    if ('meta_info' in this) {
      if (meta in this.meta_info) {
        return this.meta_info[meta]
      } else {
        return null
      }
    } else {
      return null
    }
  }
}

export default Post
