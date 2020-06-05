const Trainer = require("../models/trainer");
const Pokemon = require("../models/pokemon");

async function addToTeam(req, res) {
  const trainer = await Trainer.findOne({ email: req.user.email });
  const pokemon = await Pokemon.findOne({ _id: req.params.id });
  trainer.team.push(pokemon._id);
  trainer.save();
  res.redirect("/trainers");
}

async function deleteFromTeam(req, res) {
  const trainer = await Trainer.findOne({ email: req.user.email });
  const dbPokemon = await Pokemon.findOne({ _id: req.params.id });
  trainer.team = trainer.team.filter(
    (pokemon) => String(pokemon) !== String(dbPokemon._id)
  );
  trainer.save();
  res.redirect("/trainers");
}

async function index(req, res, next) {
  const trainer = await Trainer.findOne({ email: req.user.email }).populate({
    path: "team",
    model: "Pokemon",
  });

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
};
