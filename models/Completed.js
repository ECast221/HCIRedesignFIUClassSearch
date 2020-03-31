const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema
const CompletedSchema = new Schema({
    MAC2311: {
        type: Boolean,
        required: true
    },
    NSE1: {
        type: Boolean,
        required: true
    },
    NSE2: {
        type: Boolean,
        required: true
    },
    COP2210: {
        type: Boolean,
        required: true
    },
    CGS1920: {
        type: Boolean,
        required: true
    },
    ENC3249: {
        type: Boolean,
        required: true
    },
    MAC2312: {
        type: Boolean,
        required: true
    },
    PHY2048: {
        type: Boolean,
        required: true
    },
    MAD2104: {
        type: Boolean,
        required: true
    },
    COT3100: {
        type: Boolean,
        required: true
    },
    COP3337: {
        type: Boolean,
        required: true
    },
    CGS3095: {
        type: Boolean,
        required: true
    },
    PHY2049: {
        type: Boolean,
        required: true
    },
    CDA3102: {
        type: Boolean,
        required: true
    },
    COP3530: {
        type: Boolean,
        required: true
    },
    CEN4010: {
        type: Boolean,
        required: true
    },
    STA3033: {
        type: Boolean,
        required: true
    },
    COP4610: {
        type: Boolean,
        required: true
    },
    COP4338: {
        type: Boolean,
        required: true
    },
    CIS4911: {
        type: Boolean,
        required: true
    }
    
});

module.exports = Completed = mongoose.model('complete', CompletedSchema);