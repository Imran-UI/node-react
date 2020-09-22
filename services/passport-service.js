
const keys = require("../config/keys");
const mongoose = require("mongoose");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;


const User = mongoose.model("users");

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GoogleClientID,
      clientSecret: keys.GoogleClientSecret,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({'googleId' : profile.id}).then((existingUser) => {
        if(existingUser) {
          console.log("existing user ", existingUser);
          done(null, existingUser);

        }else {
          new User({'googleId' : profile.id}).save().then((user) => {
            done(null, user);
          });
        }

      })
      
    }
  )
);
