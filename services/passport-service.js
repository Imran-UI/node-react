const passport = require("passport");
const keys = require("../config/keys");
var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GoogleClientID,
      clientSecret: keys.GoogleClientSecret,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log("accessToken ", accessToken);
      console.log("refreshToken ", refreshToken);
      console.log("profile ", profile);
    }
  )
);
