const Pokemon = require("../models/pokemon");

module.exports = {
  show,
  index,
};

function show(req, res) {
  console.log("pokemon/show");
  Pokemon.findOne({ _id: req.params.id }, function (err, pokemon) {
    res.render("pokemon/show", { pokemon: pokemon });
  });
}

function index(req, res) {
  console.log("pokemon/index");
  Pokemon.find({}, function (err, pokemons) {
    res.render("pokemon/index", {
      allPokemon: pokemons.sort((a, b) => a.order - b.order),
      user: req.user,
    });
  });
}
