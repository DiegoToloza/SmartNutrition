'use strict'
import {Schema, model} from 'mongoose'

const dietSchema = new Schema({
    name: String,
    description: String,
    category: String,
    content: String,
    image: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('Diet', dietSchema);