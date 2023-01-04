const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const session = require("express-session");
const keys = require("./config/keys");
require("./models/user");
require("./services/passport");

mongoose.connect(keys.MONGOOSE_URL);

const app = express();

// required for passport
app.use(session({ secret: "SECRET" })); // session secret

// tell app to use cookie & passport to use cookie
//  1.
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30d
    keys: [keys.COOKIE_KEY],
  })
);
// 2.
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(require("./routes/authRoutes"));

app.listen(3010, () => {
  console.log("APP is listening on port 3010");
});
