const express = require('express');
const router = express.Router();
const httpResponse = require ('../../util/http');

// Course Model
const CartItem = require('../../models/CartItem');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', async (req, res) => {

    try {
    const cartItem = await CartItem.find({});
    httpResponse.successResponse(res, cartItem);
    } catch (e) {
        console.log(e);
        httpResponse.failureResponse(res, e.toString());
    }
    
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/',(req, res) => {
    const newCartItem = new CartItem({
        courseID: req.body.courseID
    });

    newCartItem.save()
    .then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete An Item
// @access  Public
router.delete('/:id', async (req, res) => {

    try {
        const cartItem = await CartItem.deleteOne({_id: req.params.id});
        httpResponse.successResponse(res, cartItem);
    } catch (e) {
        console.log(e);
    httpResponse.failureResponse(res, e.toString());
    }


});

module.exports = router;