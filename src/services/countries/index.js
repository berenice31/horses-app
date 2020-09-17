import Service from './service'

export default function (app) {
  app.use('/countries', new Service(app))
  app.use('/countries/:id', new Service(app))
}
