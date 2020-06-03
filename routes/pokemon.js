var express = require("express");
var router = express.Router();
var pokemonCtrl = require('../models/pokemon')

router.get("/pokemon/show/:id", pokemonCtrl.show);