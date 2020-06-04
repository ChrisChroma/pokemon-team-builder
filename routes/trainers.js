var express = require("express");
var router = express.Router();
var trainersCtrl = require("../controllers/trainers");

router.get("/trainers", trainersCtrl.index);
router.put("/trainers/team/:spriteUrl", trainersCtrl.addToTeam);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/auth/google");
  }
}

module.exports = router;
