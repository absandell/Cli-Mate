const express = require('express');
const scoreRoute = express.Router();

let Score = require('../models/score-model');

scoreRoute.route('/insert').post((req,res,next) => {
    Score.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
})

module.exports = scoreRoute;