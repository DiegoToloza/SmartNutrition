'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DietSchema = Schema({
    name: String,
    description: String,
    category: String,
    content: String,
    image: String
})

module.exports = mongoose.model('Diet', DietSchema)