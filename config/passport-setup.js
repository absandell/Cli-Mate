const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');

//Replace user with user.id

passport.serializeUser(function(user, done){
    done(null, user);
});

passport.deserializeUser(function(user, done){
   // User.findById(id, function(err, user){
        done(null, user);
    //});
});

passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: 'http://localhost:8080/google/callback'
    },
    function(accessToken, refreshToken, profile, done){
        //User.findOrCreate({googleID : profile.id}, function (err, user){
            return done(null, profile)
        //});
    }
));