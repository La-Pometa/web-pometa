import axios from 'axios'
import Post from './post'

export class Content {
  private cmsEndpoint: string
  private app: any

  constructor(endpoint: any, app: any) {
    this.cmsEndpoint = endpoint
    this.app = app
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

  getPostTitle(post: any) {
    return post.title.rendered
  }

  getPostMeta(post: any, meta: string): any | null {
    return new Post(post).getMeta(meta)
  }

  getApp() {
    return this.app
  }
}
