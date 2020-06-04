const Trainer = require("../models/trainer");

function addToTeam(req, res) {
  Trainer.find({ email: req.user.email }, (err, trainer) => {
    if (err) console.error(err);
    console.log(trainer);
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

module.exports = {
  index,
  addToTeam,
};
