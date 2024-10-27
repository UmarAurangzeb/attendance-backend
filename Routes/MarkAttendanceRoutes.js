const express = require("express");
const { MarkTeamAttendance } = require("../Controller/MarkAttendanceController.js");

const router = express.Router();

router.route("/").post(MarkTeamAttendance);

module.exports = router;