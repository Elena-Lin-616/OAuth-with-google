const express = require("express");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

app.listen(3010, () => {
  console.log("APP is listening on port 3010");
});
