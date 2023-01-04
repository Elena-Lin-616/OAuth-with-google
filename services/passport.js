const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const GithubStrategy = require("passport-github2");
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      //  find or create user
      User.findOne({ googleId: profile.id }).then((existedUser) => {
        if (existedUser) {
          // user record exist
          done(null, existedUser);
        } else {
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: keys.GITHUB_CLIENT_ID,
      clientSecret: keys.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
    }
  )
);

//  don't need to export, just require this file to execute it
