const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  function (req, res) {
    console.log("/auth/google/callback");
  }
);

// OAuth with Github
router.get(
  "/auth/github",
  passport.authenticate("github", {
    scope: ["user:email"],
  })
);
router.get("/auth/github/callback", passport.authenticate("github"));

module.exports = router;
