const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "848024213689-8t7cm10co1cfp9ffpp6d2auror2adn7g.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})