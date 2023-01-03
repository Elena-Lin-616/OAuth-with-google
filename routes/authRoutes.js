const passport = require("passport");

module.exports = (router) => {
  // OAuth with Google
  router.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  router.get("/auth/google/callback", passport.authenticate("google"));

  // OAuth with Github
  router.get(
    "/auth/github",
    passport.authenticate("github", {
      scope: ["user:email"],
    })
  );
  router.get("/auth/github/callback", passport.authenticate("github"));
};
