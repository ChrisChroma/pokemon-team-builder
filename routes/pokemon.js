var express = require("express");
var router = express.Router();
var pokemonCtrl = require("../controllers/pokemon");

router.get("/pokemon", pokemonCtrl.index);

module.exports = router;
