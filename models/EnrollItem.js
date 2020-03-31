const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema
const EnrollItemSchema = new Schema({
    courseID: {
        type: String,
        required: true
    }
});

module.exports = EnrollItem = mongoose.model('enroll', EnrollItemSchema);