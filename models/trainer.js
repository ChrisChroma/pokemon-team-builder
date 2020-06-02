var mongoose = require("mongoose");

let teamSchema = new mongoose.Schema(
    {
      name: String,
      pokemon: []
    }
)

var trainerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    googleId: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trainer", trainerSchema);
module.exports = mongoose.model('Team', teamSchema)