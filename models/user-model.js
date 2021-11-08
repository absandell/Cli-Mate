'use strict';

const mongoose = require("mongoose");
//declare schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true
    }
});

const User = mongoose.model('user', userSchema)

module.exports = User;