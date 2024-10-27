const ErrorHandler = require("../Utils/ErrorHandler.js");
const catchAsyncError = require("../Middleware/AsyncError.js");
const MarkAttendance = require("../Model/MarkAttendanceModel.js");
const Event = require("../Model/EventModel.js");

const { DistanceCheck } = require("../Utils/MarkAttendanceUtils.js");

exports.MarkTeamAttendance = catchAsyncError(async (req , res , next) => {
    res.status(200).json({
        success: true
    });
});