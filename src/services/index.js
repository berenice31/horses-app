import mongoose from 'mongoose'
import init from './init'
import seed from './seed'

import HealthService from './health' 
import FlagService from './horse' 

import Debug from '@debug'

import HorseService from './horse' 

const debug   = Debug('@api:error/mongoose')
const initlog = Debug('@api:init')

export default function () {
  const app = this

  if (process.env.DEBUG && process.env.DEBUG.match(/(,)*mongoose/)) {
    mongoose.set('debug', true)
  }

  app.configure(HealthService)
  app.configure(HorseService)

  init(app)
  seed(app)
}
