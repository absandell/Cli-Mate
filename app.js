const express = require('express');
//const authRoutes = require('./app/routes/auth-routes');
const passport = require('passport')
const cookieSession = require('cookie-session');
const bodyParser = require("body-parser");
const cors = require("cors");
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
require("./config/db");
require('./config/passport-setup');

const path = __dirname + '/app/views/';
const app = express();

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

// set up routes
app.use(cookieSession({
    name: 'Cli-Mate Session',
    keys: ['key1', 'key2']
}));

const isLoggedIn = (req, res, next) => {
    req.user ? next() : res.sendStatus(401);
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

//const db = require("./app/models");

//db.sequelize.sync();

//app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
    res.sendFile(path + "index.html");
});

app.get('/failed',(req, res)=> res.send('You failed to log in'))
//app.get('/good',isLoggedIn, (req, res) => res.send('Welcome ' + req.user.displayName))
app.get('/google',
    passport.authenticate('google', {scope : ['profile', 'email']}));

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