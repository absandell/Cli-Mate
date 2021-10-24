const express = require('express');
const router = express.Router();
const passport = require('passport');

// auth login
export function loginHandler(req, res){
    return res.render('login', { user: req.user });
}
router.get('/login', loginHandler);

// auth logout
export function logoutHandler(req, res){
    return res.send('logging out');
}
router.get('/logout', logoutHandler)

// auth with google+
export function authenticateHandler(){
    return passport.authenticate('google',{
        scope: ['profile']
    });
}
router.get('/google', authenticateHandler)

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
export function redirectHandler(){
    passport.authenticate('google');
    return res.send('you reached the redirect URI');
}
router.get('/google/redirect', redirectHandler);
module.exports = router;