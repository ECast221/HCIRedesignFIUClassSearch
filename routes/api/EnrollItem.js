const express = require('express');
const router = express.Router();
const httpResponse = require ('../../util/http');

// Course Model
const EnrollItem = require('../../models/EnrollItem');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', async (req, res) => {

    try {
    const enrollItem = await EnrollItem.find({});
    httpResponse.successResponse(res, enrollItem);
    } catch (e) {
        console.log(e);
        httpResponse.failureResponse(res, e.toString());
    }
    
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/',(req, res) => {
    const newEnrollItem = new EnrollItem({
        courseID: req.body.courseID
    });

    newEnrollItem.save()
    .then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete An Item
// @access  Public
router.delete('/:id', async (req, res) => {

    try {
        const enrollItem = await EnrollItem.deleteOne({_id: req.params.id});
        httpResponse.successResponse(res, enrollItem);
    } catch (e) {
        console.log(e);
    httpResponse.failureResponse(res, e.toString());
    }


});


module.exports = router;