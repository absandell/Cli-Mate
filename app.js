const express = require('express');
//const authRoutes = require('./app/routes/auth-routes');
const passport = require('passport')
const cookieSession = require('cookie-session');
const bodyParser = require("body-parser");
const cors = require("cors");
const keys = require('./config/keys');
const mongoose = require('mongoose');
//require("./config/db");
require('./config/passport-setup');

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

// set view engine
//app.set('view engine', 'ejs');

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


////var routes = require('./api/dbroutes/todRoutes');
//routes(app)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});