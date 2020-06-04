const Pokemon = require("../models/pokemon");

module.exports = {
  show,
  index,
};

function show(req, res) {
  res.render("pokemon/show", { pokemon: null });
}

function index(req, res) {
  Pokemon.find({}, function (err, pokemons) {
    res.render("pokemon/index", {
      allPokemon: pokemons.sort((a, b) => a.order - b.order),
    });
  });
}
