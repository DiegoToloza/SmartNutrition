'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TrainingSchema = Schema({
    name: String,
    category: String,
    difficulty: String,
    content: String,
    urlVideo: String,
    image: String
})

module.exports = mongoose.model('Training', TrainingSchema)