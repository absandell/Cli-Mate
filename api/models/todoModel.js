'use strict';

const mongoose = require("mongoose");
//declare schema
const Schema = mongoose.Schema;
const loginSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("loginModel", loginSchema);