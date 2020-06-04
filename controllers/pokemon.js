const Pokemon = require("../models/pokemon");

module.exports = {
    show,
    pokeQuery
}

function show(req, res) {
  res.render("pokemon/show", { pokemon: null });
}

// function pokeQuery(req, res) {
//   let query = req.params.id;
//   axios
//     .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
//     .then((response) => {
//       res.render("pokeapi", { pokemon: response.data });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }