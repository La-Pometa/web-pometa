import { Content } from './content.service'

export default (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { app }: any,
  inject: (arg0: string, arg1: Content) => void
) => {
  // create an instance of the LoggingService with the prefix 'My App'
  const content = new Content(process.env.API_ENDPOINT, app)

  // inject the service, making it available in the context, component, store, etc.
  inject('content', content)
}
