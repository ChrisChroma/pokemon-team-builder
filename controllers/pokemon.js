const Pokemon = require("../models/pokemon");

module.exports = {
    show
}

function show(req, res) {
    Pokemon.findById(req.params.id, (err, pokemon) => {
        res.render("pokemon/show", { pokemon: pokemon })
    })
};