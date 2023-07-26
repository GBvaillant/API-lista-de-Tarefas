const mongoose = require('mongoose')
const Schema = mongoose.Schema

const task = new Schema({
    text: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        required: true
    }
})

const Task = mongoose.model('Tasks', task)

module.exports = Task