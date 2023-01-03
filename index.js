const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");

const app = express();

mongoose.connect(keys.MONGOOSE_URL);

require("./routes/authRoutes")(app);

app.listen(3010, () => {
  console.log("APP is listening on port 3010");
});
