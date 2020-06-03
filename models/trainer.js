var mongoose = require("mongoose");

let teamSchema = new mongoose.Schema(
    {
      name: {
        type: String
      },
      pokemon: [],
      trainer: {
        type: String
      }
    }
)

var trainerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    googleId: String,
    team: [teamSchema]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trainer", trainerSchema);
module.exports = mongoose.model('Team', teamSchema)