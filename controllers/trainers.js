const Trainer = require("../models/trainer");
const axios = require("axios");

module.exports = {
  index,
};

async function index(req, res, next) {
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, "i") }
    : {};
  // Default to sorting by name
  let sortKey = req.query.sort || "name";
  Trainer.find(modelQuery)
    .sort(sortKey)
    .exec(async function (err, trainers) {
      if (err) return next(err);
      const allPokemonResponse = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const allPokemonDetailsPromises = allPokemonResponse.data.results.map(
        (pokemon) => axios.get(pokemon.url)
      );
      const allPokemonDetails = await Promise.all(allPokemonDetailsPromises);
      const sprites = allPokemonDetails.map(
        (pokemonDetail) => pokemonDetail.data.sprites.front_default
      );
      // Passing search values, name & sortKey, for use in the EJS
      res.render("trainers/index", {
        trainers,
        name: req.query.name,
        sortKey,
        user: req.user,
        sprites,
      });
    });
}
