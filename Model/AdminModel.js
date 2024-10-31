const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({

});

const AdminModel = new mongoose.model("Admin" , AdminSchema);

module.exports = AdminModel;