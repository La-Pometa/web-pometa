import axios from 'axios'
import Post from './post'

export class Content {
  private cmsEndpoint: string
  private app: any

  constructor(endpoint: any, app: any) {
    this.cmsEndpoint = endpoint
    this.app = app
  }

  private getTitle(name: string) {
    return `${name} - ${process.env.SITE_NAME}`
  }

  private getEndpoint() {
    return this.cmsEndpoint
  }

  private getLocale() {
    return this.app.i18n.locale
  }

  async getImage(id: number) {
    const response = await axios.get(
      `${this.getEndpoint()}wp-json/wp/v2/media/${id}`
    )
    return response.data
  }

  async getImagebySlug(slug: string) {
    const response = await axios.get(
      `${this.getEndpoint()}wp-json/wp/v2/media/?${slug}`
    )
    return response.data[0]
  }

  async getPostContentById(id: number) {
    const response = await axios.get(
      `${this.getEndpoint()}wp-json/wp/v2/posts/${id}`
    )

    return response.data.content.rendered
  }

  async getPageContentById(id: number) {
    const response = await axios.get(
      `${this.getEndpoint()}wp-json/wp/v2/pages/${id}`
    )

    return response.data.content.rendered
  }

  async getHomePage() {
    const response = await axios.get(
      `${this.getEndpoint()}wp-json/wp/v2/path/?lang=${this.getLocale()}`
    )

    return response.data
  }

  async getPostById(id: number) {
    const response = await axios.get(
      `${this.getEndpoint()}wp-json/wp/v2/posts/${id}`
    )

    return response.data
  }

  async getPostBySlug(slug: string) {
    const response = await axios.get(
      `${this.getEndpoint()}wp-json/wp/v2/posts/?slug=${slug}&lang=${this.getLocale()}`
    )

    return response.data[0]
  }

  async getAllPosts(page: number = 1, perPage: number = 9) {
    const response = await axios.get(
      `${this.getEndpoint()}wp-json/wp/v2/posts/?per_page=${perPage}&page=${page}&lang=${this.getLocale()}`
    )

    return response.data
  }

  async getAllFromType(
    type: string,
    page: number = 1,
    perPage: number = 9,
    orderby: string = 'date',
    order: string = 'desc'
  ) {
    const response = await axios.get(
      `${this.getEndpoint()}wp-json/wp/v2/${type}/?per_page=${perPage}&page=${page}&lang=${this.getLocale()}&orderby=${orderby}&order=${order}`
    )

    return response.data
  }

  async getPageById(id: number) {
    const response = await axios.get(
      `${this.getEndpoint()}wp-json/wp/v2/pages/${id}/?lang=${this.getLocale()}`
    )

    return response.data
  }

  async getSingleTypeByPath(path: string) {
    const response = await axios.get(
      `${this.getEndpoint()}wp-json/wp/v2/path/?slug=${path}&translate=${this.getLocale()}`
    )

    return this.parseAndSaveResponse(response)
  }

  private parseAndSaveResponse(res: any) {
    return res.data
  }

  async postContactForm(fields: any[], formId: number) {
    const formData = new FormData()

    fields.forEach((field) => {
      formData.append(field.name, field.value)
    })

    const res = await axios({
      method: 'post',
      url: `${this.getEndpoint()}wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })

    return res.data
  }

  getPostMeta(post: any, meta: string): any | null {
    return new Post(post).getMeta(meta)
  }

  getPostContent(post: any): any | null {
    return new Post(post).getContent()
  }

  getPostTitle(post: any): any | null {
    return new Post(post).getTitle()
  }

  getPostMetaSeo(post: any): any | null {
    return new Post(post).getMetaSeo()
  }

  getMetaTitle(meta: any) {
    if (meta) {
      return meta.og_title
    }
  }

  getMetaSeo(meta: any) {
    if (meta) {
      const metas = []
      for (const key in meta) {
        if (
          Object.hasOwnProperty.call(meta, key) &&
          (key.startsWith('og_') ||
            key.startsWith('article_') ||
            key.startsWith('description'))
        ) {
          if (key === 'og_image') {
            metas.push({
              name: key.replace('_', ':'),
              content: meta[key][0].url,
            })
            metas.push({
              name: key.replace('_', ':') + ':width',
              content: meta[key][0].width,
            })
            metas.push({
              name: key.replace('_', ':') + ':height',
              content: meta[key][0].height,
            })
          } else {
            metas.push({
              name: key.replace('_', ':'),
              content: meta[key],
            })
          }
        } else if (
          Object.hasOwnProperty.call(meta, key) &&
          key.startsWith('twitter_') &&
          key !== 'twitter_misc'
        ) {
          metas.push({
            name: key.replace('_', ':'),
            content: meta[key],
          })
        } else if (key === 'robots') {
          const robots: any[] = []

          for (const robot in meta[key]) {
            robots.push(meta[key][robot])
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

  getPostHeadTitle(post: any): any | null {
    return new Post(post).getHeadTitle()
  }

  getApp() {
    return this.app
  }
}
