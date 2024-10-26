const express = require("express");
const app = express();
const middleware = require("./Middleware/Error");

app.use(express.json());

// define the routes import here


// define the routes here


app.use(middleware)
module.exports = app;