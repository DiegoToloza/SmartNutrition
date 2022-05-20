'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TrainingSchema = Schema({
    name: String,
    category: String,
    difficulty: String,
    content: String,
    urlVideo: String,
    image: String
})

module.exports = mongoose.model('Training', TrainingSchema)