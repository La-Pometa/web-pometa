import { Context } from '@nuxt/types'
import { Content } from './api'

export default (
  { app }: Context,
  inject: (name: string, instance: Content) => void
) => {
  // create an instance of the LoggingService with the prefix 'My App'
  // inject the service, making it available in the context, component, store, etc.
  inject('content', new Content(process.env.API_ENDPOINT, app))
}
