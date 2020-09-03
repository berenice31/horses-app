import { iff, iffElse, isNot, isProvider, disallow } from 'feathers-hooks-common'
import * as hooks from './flag.hooks'

export const before = {
  all: [],
  find: [
    disallow(),
  ],
  get: [
    disallow(),
  ],
  create: [
    hooks.associateContinent(),
  ],
  update: [
    disallow(),
  ],
  patch: [
    disallow(),
  ],
  remove: [
    disallow(),
  ]
}

export const after = {
  all: [],
  find: [],
  get: [],
  create: [
    hooks.getFlag(),
  ],
  update: [],
  patch: [],
  remove: []
}

export const error = {
  all: [
    // handleErrorMessage()
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
}

export default {
  before,
  after,
  error
}
