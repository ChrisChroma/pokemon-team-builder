var express = require('express');
var router = express.Router();
var trainersCtrl = require('../controllers/trainers')
var pokemonCtrl = require('../controllers/pokemon')

/* GET users listing. */
router.get('/trainers', trainersCtrl.index);
router.get('/pokemon/show/:id', pokemonCtrl.show)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/auth/google");
  }
}

module.exports = router;
