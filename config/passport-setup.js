const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user-model')

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id).then((user)=>{
        done(null, user,id);
    });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: 'http://localhost:8080/google/callback'
    },
    function(accessToken, refreshToken, profile, done){
        User.findOne({googleId: profile.id}).then((currentUser)=> {
            if (currentUser){
                console.log('duplicate user: ' + currentUser);
            }
            else{
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser)=> {
                    console.log('new user created: ' + newUser);
                })
            }
        })
    }
));