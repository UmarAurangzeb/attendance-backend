const ErrorHandler = require("../Utils/ErrorHandler.js");
const catchAsyncError = require("../Middleware/AsyncError.js");
const MarkAttendance = require("../Model/MarkAttendanceModel.js");
const Event = require("../Model/EventModel.js");
const Admin = require("../Model/AdminModel.js");

exports.GetTeamDetails = catchAsyncError(async (req , res , next) => {
    res.status(200).json({
        success: true,
        message: "Get Team Details"
    });
});

exports.UpdateTeamAttendance = catchAsyncError(async (req , res , next) => {
    res.status(200).json({
        success: true,
        message: "Update Team Attendance"
    });
});

exports.GetEventDetails = catchAsyncError(async (req , res , next) => {
    res.status(200).json({
        success: true,
        message: "Get Event Details"
    });
});

exports.UpdateEventTime = catchAsyncError(async (req , res , next) => {
    res.status(200).json({
        success: true,
        message: "Update Event Time"
    });
});