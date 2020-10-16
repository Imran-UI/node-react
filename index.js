const express = require("express");
var bodyParser = require('body-parser')
const mongoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");
const cookieSession = require("cookie-session");

require("./models/users-model");

require("./services/passport-service");

require("./config/mongoose-connect")();
const app = express();

// parse application/json
app.use(bodyParser.json())

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
require("./routes/billingRoutes")(app);

if(process.env.NODE_ENV === 'production') {
  //express will serve up production assets 
  //like our main.js or main.css files
  //any file that starts with this check in client.build folder
  app.use(express.static('client/build'));


  //express will serve up index.html if it donot find any route 
  const path = require('path');
  app.get('*', (req,resp) => {
    resp.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
