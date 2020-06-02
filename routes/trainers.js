var express = require('express');
var router = express.Router();
var trainersCtrl = require('../controllers/trainers')


/* GET users listing. */
router.get('/trainers', trainersCtrl.index);
router.get('/')

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/auth/google");
  }
}

module.exports = router;
