const mongoose = require('mongoose')

const task_schema = new mongoose.Schema({
    name: String,
    completed: Boolean
})

module.exports = mongoose.model('Task', task_schema)
