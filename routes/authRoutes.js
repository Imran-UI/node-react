const passport = require("passport");


module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get("/auth/google/callback", passport.authenticate("google"), (req,resp) => {
    resp.redirect('/surveys');
  });

  app.get("/api/current_user", (req, resp) => {
    resp.send(req.user);
  });

  app.get("/api/logout", (req, resp) => {
    req.logOut();
    resp.redirect('/');
  });
};
