import Service from './service'

export default function (app) {
  app.use('/health', new Service(app))
}
