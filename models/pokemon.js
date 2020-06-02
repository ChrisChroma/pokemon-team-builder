var mongoose = require("mongoose");

let pokemonSchema = new mongoose.Schema(
    {
        name: String,
        sprite: Image,
        type1: String,
        type2: String,
        abilities: [String],
        moves: [String]
    }
);

module.exports = mongoose.model("Pokemon", pokemonSchema);