const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");
const cookieSession = require("cookie-session");

require("./models/users-model");

require("./services/passport-service");

require("./config/mongoose-connect")();
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: [keys.cookieKey],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
