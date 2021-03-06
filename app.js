const express = require('express');
const passport = require('passport')
const cookieSession = require('cookie-session');
const bodyParser = require("body-parser");
const cors = require("cors");
const keys = require('./config/keys');
const mongoose = require('mongoose');
const Score = require('./models/score-model');
require('./config/passport-setup');
const scoreAPI = require('./config/score-setup');

const path = __dirname + '/app/views/';

const authCheck = (req, res, next) => {
    req.user ? next() : res.redirect('/google')
}

const app = express();

app.use(cookieSession({
    name: 'Cli-Mate Session',
    maxAge: 24 * 60 * 60 * 1000,
    keys:[keys.session.cookieKey]
}));

mongoose.connect(keys.mongoose.uri, () => {
    console.log("DB connection established!");
}),
err => {
    {console.log("Errror connecting to DB:", err);}
};

app.use(express.static(path));

var corsOptions = {
    origin: "http://localhost:8080"
};

const isLoggedIn = (req, res, next) => {
    req.user ? next() : res.redirect('/google')
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.get('/', authCheck, (req, res) => {
    res.sendFile(path + "index.html", { user: req.user });
});

app.get('/google',
    passport.authenticate('google', {scope : ['profile']
}));

app.get('/google/callback', passport.authenticate('google'), (req,res) => {
    res.redirect('/');
});

app.get('/logout', (req, res)=> {
    req.session = null;
    req.logout();
    res.redirect('/');
})

app.use('/api', scoreAPI);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});