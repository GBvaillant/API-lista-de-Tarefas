const mongoose = require('mongoose')
const Schema = mongoose.Schema

const task = new Schema({
    text: {
        type: String,
        
    },
    category: {
        type: String,
        
    },
    complete: {
        type: Boolean,
        
    }
})

const Task = mongoose.model('Tasks', task)

module.exports = Task