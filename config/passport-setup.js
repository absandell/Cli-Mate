const passport = require('passport');
const GoogleConnect = require('passport-google-oauth20');

passport.use(
    new GoogleConnect({
        // Google Connect options
    }), () =>{
        // Passport callback function
    })