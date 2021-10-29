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

  public getHeadTitle(): any | null {
    if ('yoast_head_json' in this) {
      return 'title' in this.yoast_head_json
        ? this.yoast_head_json.title
        : this.yoast_head_json.og_title
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

  public getMetaSeo(): any | null {
    if ('yoast_head_json' in this) {
      const metas = []
      for (const key in this.yoast_head_json) {
        if (
          Object.hasOwnProperty.call(this.yoast_head_json, key) &&
          (key.startsWith('og_') ||
            key.startsWith('article_') ||
            key.startsWith('description'))
        ) {
          if (key === 'og_image') {
            metas.push({
              name: key.replace('_', ':'),
              content: this.yoast_head_json[key][0].url,
            })
            metas.push({
              name: key.replace('_', ':') + ':width',
              content: this.yoast_head_json[key][0].width,
            })
            metas.push({
              name: key.replace('_', ':') + ':height',
              content: this.yoast_head_json[key][0].height,
            })
          } else {
            metas.push({
              name: key.replace('_', ':'),
              content: this.yoast_head_json[key],
            })
          }
        } else if (
          Object.hasOwnProperty.call(this.yoast_head_json, key) &&
          key.startsWith('twitter_')
        ) {
          metas.push({
            name: key.replace('_', ':'),
            content: this.yoast_head_json[key],
          })
        } else if (key === 'robots') {
          const robots: any[] = []

          for (const robot in this.yoast_head_json[key]) {
            robots.push(this.yoast_head_json[key][robot])
          }

          metas.push({
            name: 'robots',
            content: robots.join(', '),
          })
        }
      }

      if (!metas.filter((x) => x.name === 'description').length) {
        if (metas.filter((x) => x.name === 'og:description').length) {
          const description = metas.find((x) => x.name === 'og:description')
          metas.push({
            name: 'description',
            content: description ? description.content : '',
          })
        }
      }

      return metas
    } else {
      return null
    }
  }
}

export default Post
