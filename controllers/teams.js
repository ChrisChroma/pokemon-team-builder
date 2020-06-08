const Pokemon = require("../models/pokemon");
const Trainer = require("../models/trainer");

async function index(req, res) {
  const trainerDocuments = await Trainer.find({});
  const trainerPromises = trainerDocuments.map(async (trainer) => {
    const team = trainer.team.map(async (team) => {
      const pokemonPromises = await team.pokemon.map(async (pokemonId) => {
        const pokemonDocument = Pokemon.findOne({ _id: pokemonId });
        return (await pokemonDocument).toObject();
      });
      const pokemon = await Promise.all(pokemonPromises);

      return {
        _id: team._id,
        name: team.name,
        pokemon: pokemon,
      };
    });
    return {
      name: trainer.name,
      avatar: trainer.avatar,

      teams: await Promise.all(team),
    };
  });

  const trainers = await Promise.all(trainerPromises);
  res.render("teams/index", {
    trainers,
  });
}

module.exports = {
  index,
};
