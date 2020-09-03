export default function (app) {
  app.service('flags').publish(data => {
    return app.channel('everybody')
  })
}