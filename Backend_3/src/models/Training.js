'use strict'
import mongoose, { Schema, model } from "mongoose"

const trainingSchema = new Schema({
    name: String,
    category: String,
    difficulty: String,
    content: String,
    urlVideo: String,
    image: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('Training', trainingSchema);