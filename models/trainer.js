const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  pokemon: [],
});

const trainerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    googleId: String,
    team: [teamSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trainer", trainerSchema);
