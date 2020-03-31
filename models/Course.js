const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema
const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    course_number: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    }
});

module.exports = Course = mongoose.model('course', courseSchema);