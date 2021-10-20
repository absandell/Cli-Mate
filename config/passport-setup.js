const passport = require('passport');
const GoogleConnect = require('passport-google-oauth20');
const keys = require('./keys.js');
passport.use(
    new GoogleConnect({
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecre: keys.google.clientSecret
    }, () =>{
        // Passport callback function
    })
)