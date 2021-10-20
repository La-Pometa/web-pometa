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

  public getTitle(): any | null {
    if ('title' in this) {
      if ('rendered' in this.title) {
        return this.title.rendered
      } else {
        return null
      }
    } else {
      return null
    }
  }

  public getContent(): any | null {
    if ('content' in this) {
      if ('rendered' in this.content) {
        return this.content.rendered
      } else {
        return null
      }
    } else {
      return null
    }
  }

  public getMetaSeo(meta: string): any | null {
    if ('yoast_head_json' in this) {
      if (meta in this.yoast_head_json) {
        return this.yoast_head_json[meta]
      } else {
        return null
      }
    } else {
      return null
    }
  }
}

export default Post
