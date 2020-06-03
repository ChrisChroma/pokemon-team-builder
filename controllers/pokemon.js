const Pokemon = require("../models/pokemon");

module.exports = {
    show
}

function show(req, res) {
  res.render("pokemon/show", { pokemon: null });
}