'use strict';

const mongoose = require("mongoose");
//declare schema
const Schema = mongoose.Schema;
const scoreSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    fromAddress: {
        type: String,
        required: true
    },
    toAddress: {
        type: String,
        required: true
    },
    performanceIndex: {
        type: Number,
        required: true
    },
});

const Score = mongoose.model('score', scoreSchema)

module.exports = Score;