'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var DietSchema = Schema({
    name: String,
    description: String,
    category: String,
    content: String,
    image: String
})

module.exports = mongoose.model('Diet', DietSchema)