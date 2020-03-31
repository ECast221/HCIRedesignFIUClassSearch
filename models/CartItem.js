const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema
const CartItemSchema = new Schema({
    courseID: {
        type: String,
        required: true
    }
    
});

module.exports = CartItem = mongoose.model('cart', CartItemSchema);