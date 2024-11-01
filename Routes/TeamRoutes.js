const express = require("express");
const { MarkTeamAttendance } = require("../Controller/TeamController.js");

const router = express.Router();

router.route("/").post(MarkTeamAttendance);

module.exports = router;