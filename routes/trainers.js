const express = require("express");
const router = express.Router();
const trainersCtrl = require("../controllers/trainers");

router.get("/trainers", trainersCtrl.index);
router.post("/trainers/teams/:id", trainersCtrl.addToTeam);
router.post("/trainers/teams/remove/:id", trainersCtrl.deleteFromTeam);

module.exports = router;
