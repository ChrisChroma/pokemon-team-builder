const Trainer = require("../models/trainer");
const axios = require("axios");

module.exports = {
  index,
  addToTeam,
  delete: deleteOne,
};

function deleteOne(req, res) {}

function addToTeam(req, res) {
  Trainer.findById(req.params.id, (err, team) => {
    trainer.team.push(req.params.id);
    trainer.save((err) => {
      console.error(err);
      if (err) res.redirect("/trainers");
    });
  });
}

function index(req, res, next) {
  if (!req.user) {
    res.redirect("/");
  } else {
    res.render("trainers/index", {
      user: req.user,
    });
  }
}

function pokemonDetails(req, res) {}
