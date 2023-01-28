const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Must provide task name"],
        trim: true,
        maxlength: [30, "Name can't be more than 30 characters"]
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)