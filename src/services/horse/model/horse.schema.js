import { Schema } from 'mongoose'
import Constants from '../constants/horse.constants'

export default {
  country: { 
    type: String, 
    required: true,
    enum: Object.keys(Constants.countries),
    unique: true,
  },

  race: { 
    type: String, 
    required: true,
  },

  vote: {
    type: Number,
    default: 0
  }
}
