const express = require("express");
const app = express();

// todo 1: require modules
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

// todo 2: infor passport how to use the strategy
// 1. config -> customize how strategy behave inside of our app
// 2. teach passport how to use this strategy
passport.use(new GoogleStrategy());

app.listen(5000);
