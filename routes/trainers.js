const express = require("express");
const router = express.Router();
const trainersCtrl = require("../controllers/trainers");

router.get("/trainers", trainersCtrl.index);
router.post("/trainers/teams/add/:id", trainersCtrl.addToTeam);
router.post("/trainers/teams/remove/:id", trainersCtrl.deleteFromTeam);
router.post("/trainers/teams/new", trainersCtrl.createTeam);

module.exports = router;
