const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  pokemon: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pokemon" }],
});

const trainerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    googleId: String,
    team: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pokemon" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trainer", trainerSchema);
