import moment from 'moment'
import Debug from '@debug'
import request from 'superagent'

const debug = Debug('countries')

export default class Service {
  setup (app) {
    debug.init('Setup countries')
  }

  find (params = {}) {
    request
    .find(`https://restcountries.eu/rest/v2/name/all`).then(res => res.body)
  }

  get (id) {
    request
      .get(`https://restcountries.eu/rest/v2/name/${id}`).then(res => res.body)
  }
}
