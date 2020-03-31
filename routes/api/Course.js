const express = require('express')
const router = express.Router()
const httpResponse = require('../../util/http')

// Course Model
const Course = require('../../models/Course')

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', async (req, res) => {

    try {
        const courses = await Course.find({})
        httpResponse.successResponse(res, courses)
    } catch (e) {
        console.log(e)
        httpResponse.failureResponse(res, e.toString())
    }

})

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {

    // Array of JSON Objects
    if (req.body.courses) {
        
        Course.create(req.body.courses, function (err) {
            if (err)
                res.send(err)
            else
                res.json(req.body)
        })
    }else{

        const newCourse = new Course({
            name: req.body.name,
            course_number: req.body.course_number,
            hour: req.body.hour
        })
    
        newCourse.save()
            .then(item => res.json(item))
    }
    
})

// @route   DELETE api/items/:id
// @desc    Delete An Item
// @access  Public
router.delete('/:id', (req, res) => {
    if(req.params.id === 'all')
    {
        Course.collection.deleteMany({}).then(() => res.json({ success: true }))
    }else{
        Course.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
    }
    
})


module.exports = router