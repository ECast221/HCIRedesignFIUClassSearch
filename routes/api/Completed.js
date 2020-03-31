const express = require('express');
const router = express.Router();
const httpResponse = require ('../../util/http');

// Course Model
const Completed = require('../../models/Completed');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', async (req, res) => {

    try {
    const completedList = await Completed.find({});
    httpResponse.successResponse(res, completedList);
    } catch (e) {
        console.log(e);
        httpResponse.failureResponse(res, e.toString());
    }
    
});

router.put('/:id', async (req, res) => {
    try{
      const completedList = await Completed.findByIdAndUpdate(req.params.id, 
      { MAC2311: req.body.MAC2311, 
        NSE1: req.body.NSE1,
        NSE2: req.body.NSE2,
        COP2210: req.body.COP2210,
        CGS1920: req.body.CGS1920,
        ENC3249: req.body.ENC3249,
        MAC2312: req.body.MAC2312,
        PHY2048: req.body.PHY2048,
        MAD2104: req.body.MAD2104,
        COT3100: req.body.COT3100,
        COP3337: req.body.COP3337,
        CGS3095: req.body.CGS3095,
        PHY2049: req.body.PHY2049,
        CDA3102: req.body.CDA3102,
        COP3530: req.body.COP3530,
        CEN4010: req.body.CEN4010,
        STA3033: req.body.STA3033,
        COP4610: req.body.COP4610,
        COP4338: req.body.COP4338,
        CIS4911: req.body.CIS4911
    });
      httpResponse.successResponse(res, completedList);
    } catch (e) {
      console.log(e)
      httpResponse.failureResponse(res, e.toString());
    }
  
  

  });

module.exports = router;