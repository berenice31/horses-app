import moment from 'moment'
import Debug from '@debug'

const debug = Debug('health')

const TIME = moment()

export default class Service {
  setup (app) {
    debug.init('Setup health')
  }

  find () {
    return Promise.resolve({
      date: TIME.format('DD-MM-YYYY HH:mm:ss'),
      version: '',
    })  
  }
}
