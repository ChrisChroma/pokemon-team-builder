const express = require("express");
const router = express.Router();
const passport = require("passport");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Pokemon Team Builder" });
});
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/trainers",
    failureRedirect: "/trainers",
  })
);
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
