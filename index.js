const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const keys = require("./config/keys");
require("./models/user");
require("./services/passport");

const app = express();

mongoose.connect(keys.MONGOOSE_URL);

// required for passport
app.use(session({ secret: "SECRET" })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(require("./routes/authRoutes"));

app.listen(3010, () => {
  console.log("APP is listening on port 3010");
});
