import { Schema } from 'mongoose'
import Constants from '../constants/flag.constants'

export default {
  country: { 
    type: String, 
    required: true,
    enum: Object.keys(Constants.countries),
    unique: true,
  },

  continent: { 
    type: String, 
    required: true,
  },
}
