const express = require("express");
const { GetEventDetails , GetTeamDetails , UpdateEventTime , UpdateTeamAttendance } = require("../Controller/AdminController");

const router = express.Router();

router.route("/Teams").get(GetTeamDetails).put(UpdateTeamAttendance);
router.route("/Events").get(GetEventDetails).put(UpdateEventTime);

module.exports = router;