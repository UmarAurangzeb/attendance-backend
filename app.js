const express = require("express");
const app = express();
const Middleware = require("./Middleware/Error");

app.use(express.json());

// define the routes import here
const MarkAttendanceRoutes = require("./Routes/MarkAttendanceRoutes.js");
const AdminRoutes = require("./Routes/AdminRoutes.js");

// define the routes here
app.use("/MarkAttendance" , MarkAttendanceRoutes);
app.use("/Admin" , AdminRoutes);

app.use(Middleware)
module.exports = app;