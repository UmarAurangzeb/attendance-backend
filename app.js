const express = require("express");
const dotenv = require("dotenv");

const app = express();
const Middleware = require("./Middleware/Error");
const cors = require('cors');
app.use(express.json());
const dbConnect = require("./Data/Db.js");
require('dotenv').config();

dbConnect();
app.use(cors({ origin: '*' }));

// define the routes import here
const TeamRoutes = require("./Routes/TeamRoutes.js");
const AdminRoutes = require("./Routes/AdminRoutes.js");

// define the routes here
app.use("/MarkAttendance", TeamRoutes);
app.use("/Admin", AdminRoutes);

app.use(Middleware)
module.exports = app;