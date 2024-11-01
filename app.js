const express = require("express");
const app = express();
const Middleware = require("./Middleware/Error");

app.use(express.json());

// define the routes import here
const TeamRoutes = require("./Routes/TeamRoutes.js");
const AdminRoutes = require("./Routes/AdminRoutes.js");

// define the routes here
app.use("/MarkAttendance" , TeamRoutes);
app.use("/Admin" , AdminRoutes);

app.use(Middleware)
module.exports = app;