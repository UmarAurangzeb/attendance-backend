const ErrorHandler = require("../Utils/ErrorHandler.js");
const catchAsyncError = require("../Middleware/AsyncError.js");
const Team = require("../Model/TeamModel.js");
const Event = require("../Model/EventModel.js");

const { DistanceCheck } = require("../Utils/MarkAttendanceUtils.js");

exports.MarkTeamAttendance = catchAsyncError(async (req , res , next) => {
    
});