import axios from 'axios'
export class Content {
  private cmsEndpoint: string

  constructor(endpoint: any) {
    this.cmsEndpoint = endpoint
  }

  getEndpoint() {
    return this.cmsEndpoint
  }

  async getImage(id: number) {
    const response = await axios.get(
      `${this.cmsEndpoint}wp-json/wp/v2/media/${id}`
    )
    return response.data
  }

  async getImagebySlug(slug: string) {
    const response = await axios.get(
      `${this.cmsEndpoint}wp-json/wp/v2/media/?${slug}`
    )
    return response.data[0]
  }

  async getPostContentById(id: number) {
    const response = await axios.get(
      `${this.cmsEndpoint}wp-json/wp/v2/posts/${id}`
    )

    return response.data.content.rendered
  }

  async getPageContentById(id: number) {
    const response = await axios.get(
      `${this.cmsEndpoint}wp-json/wp/v2/pages/${id}`
    )

    return response.data.content.rendered
  }

  async getPostById(id: number) {
    const response = await axios.get(
      `${this.cmsEndpoint}wp-json/wp/v2/posts/${id}`
    )

    return response.data
  }

  async getPostBySlug(slug: string) {
    const response = await axios.get(
      `${this.cmsEndpoint}wp-json/wp/v2/posts/?slug=${slug}`
    )

    return response.data[0]
  }

  async getAllPosts(page: number = 1, perPage: number = 9) {
    const response = await axios.get(
      `${this.cmsEndpoint}wp-json/wp/v2/posts/?per_page=${perPage}&page=${page}`
    )

    return response.data
  }

  async getPageById(id: number) {
    const response = await axios.get(
      `${this.cmsEndpoint}wp-json/wp/v2/pages/${id}`
    )

    return response.data
  }
}
