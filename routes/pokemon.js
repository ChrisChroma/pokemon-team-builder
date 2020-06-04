const express = require("express");
const router = express.Router();
const pokemonCtrl = require("../controllers/pokemon");

router.get("/pokemon", pokemonCtrl.index);

module.exports = router;
