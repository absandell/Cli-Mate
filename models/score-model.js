'use strict';

const mongoose = require("mongoose");
//declare schema
const Schema = mongoose.Schema;
const scoreSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true
    },
});

const Score = mongoose.model('score', scoreSchema)

module.exports = Score;