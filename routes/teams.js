const express = require("express");
const router = express.Router();
const teamsCtrl = require("../controllers/teams");

router.get("/teams", teamsCtrl.index);

module.exports = router;
