const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    competitionName: {
        type: String,
        required: true,
        unique: true,
    },
    start_time: {
        type: Date,
        required: true,
    },
    end_time: {
        type: Date,
        required: true,
    },
});

const EventModel = new mongoose.model("Event" , EventSchema);

module.exports = EventModel;