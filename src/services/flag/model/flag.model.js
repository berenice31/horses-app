import { Schema } from 'mongoose'
import ModelSchema from './flag.schema'

export default function (app) {
  const modelName = 'flag'
  const MongoClient = app.get('databases').flags

  const schema = new Schema(ModelSchema, { 
    timestamps: true,
  })

  return MongoClient.model(modelName, schema)
}
