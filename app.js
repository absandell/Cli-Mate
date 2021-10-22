const express = require('express');
const authRoutes = require('./app/routes/auth-routes');
const passport = require('passport')
const cookieSession = require('cookie-session');
const bodyParser = require("body-parser");
const cors = require("cors");
require('./config/passport-setup');

const path = __dirname + '/app/views/';
const app = express();

app.use(express.static(path));

// set view engine
//app.set('view engine', 'ejs');

var corsOptions = {
    origin: "http://localhost:8080"
};

// set up routes
//app.use(cookieSession({
 //   name: 'Cli-Mate Session',
  //  keys: ['key1', 'key2']
//}));

const isLoggedIn = (req, res, next) => {
    req.user ? next() : res.sendStatus(401);
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
app.get('/good',isLoggedIn, (req, res) => res.send('Welcome ' + req.user.displayName))
app.get('/google',
    passport.authenticate('google', {scope : ['profile', 'email']}));

app.get('/google/callback', 
    passport.authenticate('google', {failureRedirect: '/failed'}),
    function(req, res){
        res.redirect('/good');
    });

app.get('/logout', (req, res)=> {
    req.session = null;
    req.logout();
    res.redirect('/');
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
//app.listen(3000, () => {
 //   console.log('app now listening for requests on port 3000');
//});