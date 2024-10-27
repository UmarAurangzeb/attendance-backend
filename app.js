const express = require("express");
const app = express();
const Middleware = require("./Middleware/Error");

app.use(express.json());

// define the routes import here
const MarkAttendance = require("./Routes/MarkAttendanceRoutes.js");

// define the routes here
app.use("/MarkAttendance" , MarkAttendance);

app.use(Middleware)
module.exports = app;