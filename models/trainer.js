var mongoose = require("mongoose");

let teamSchema = new mongoose.Schema({
    
})

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