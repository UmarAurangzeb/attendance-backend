const ErrorHandler = require("../Utils/ErrorHandler.js");
const catchAsyncError = require("../Middleware/AsyncError.js");
const Team = require("../Model/TeamModel.js");
const Event = require("../Model/EventModel.js");

const { DistanceCheck } = require("../Utils/MarkAttendanceUtils.js");

exports.MarkTeamAttendance = catchAsyncError(async (req, res, next) => {
    const { code, latitude, longitude } = req.body;
    if (!latitude || !longitude) {
        res.status(401).json({
            success: false,
            message: "Please enable location services."
        });
    }

    const Distance = DistanceCheck(latitude, longitude);
    if (Distance >= 1000) {
        return next(new ErrorHandler("You are not in the vicinity of the event.", 400));
    }

    const team = await Team.findOne({
        att_code: code
    });

    if (!team) {
        return next(new ErrorHandler("Team doesn't exist", 404));
    } else {
        const competition = team.Competition;
        const event = await Event.findOne({
            competitionName: competition
        });

        if (!event) {
            return next(new ErrorHandler("Event doesn't exist", 404));
        } else {
            const currtime = new Date();
            const starttime = new Date(event.start_time);
            const endtime = new Date(event.end_time);

            if (currtime >= starttime && currtime <= endtime) {
                team.attendance = true;
                console.log(team);
                await team.save();
                res.status(200).json({
                    success: true,
                    message: "Attendance marked successfully"
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: "Event has not started yet."
                });
            }
        }
    }
});