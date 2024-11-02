const express = require("express");
const LimitSubmissions = require("../Middleware/LimitSubmissions.js")
const { MarkTeamAttendance } = require("../Controller/TeamController.js");

const router = express.Router();

router.route("/").put(LimitSubmissions, MarkTeamAttendance);

module.exports = router;