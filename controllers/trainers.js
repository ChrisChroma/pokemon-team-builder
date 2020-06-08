const Trainer = require("../models/trainer");
const Pokemon = require("../models/pokemon");

async function createTeam(req, res) {
  console.log("trainers/createTeam");
  try {
    const trainer = await Trainer.findOne({ email: req.user.email });
    trainer.team.push({ name: req.body.name, pokemon: [] });
    trainer.save();
    res.redirect("/trainers");
  } catch (error) {
    console.error(error);
  }
}

async function addToTeam(req, res) {
  console.log("trainers/addToTeam");
  const trainer = await Trainer.findOne({ email: req.user.email });
  const pokemon = await Pokemon.findOne({ _id: req.params.id });
  trainer.team.pokemon.push(pokemon._id);
  trainer.save();
  res.redirect("/trainers");
}

async function deleteFromTeam(req, res) {
  console.log("trainers/deleteFromTeam");

  const trainer = await Trainer.findOne({ email: req.user.email });
  const dbPokemon = await Pokemon.findOne({ _id: req.params.id });
  trainer.team.pokemon = trainer.team.pokemon.filter(
    (pokemon) => String(pokemon) !== String(dbPokemon._id)
  );
  trainer.save();
  res.redirect("/trainers");
}

async function index(req, res, next) {
  console.log("trainers/index");
  const trainer = await Trainer.findOne({ email: req.user.email });
  if (!trainer) {
    res.redirect("/");
  } else {
    res.render("trainers/index", {
      user: trainer,
    });
  }
}

module.exports = {
  index,
  addToTeam,
  deleteFromTeam,
  createTeam,
};
