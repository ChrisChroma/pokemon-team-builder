var express = require("express");
var router = express.Router();
var pokemonCtrl = require('../controllers/pokemon')

router.get("/pokemon/show/:id", pokemonCtrl.show);
