const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    // consumerNumber: {
    //     type: String,
    //     required: true,
    // },
    Team_Name: {
        type: String,
        required: true,
    },
    Leader_name: {
        type: String,
        required: true,
    },
    Vjudge_Username: {
        type: String,
        required: true,
    },
    Leader_email: {
        type: String,
        required: true,
    },
    mem1_name: {
        type: String,
        default: "",
    },
    mem1_email: {
        type: String,
        default: "",
    },
    mem2_name: {
        type: String,
        default: "",
    },
    mem2_email: {
        type: String,
        default: "",
    },
    // mem3_name: {
    //     type: String,
    //     default: "",
    // },
    // mem3_email: {
    //     type: String,
    //     default: "",
    // },
    // mem4_name: {
    //     type: String,
    //     default: "",
    // },
    // mem4_email: {
    //     type: String,
    //     default: "",
    // },
    att_code: {
        type: String,
        required: true,
    },
    Competition: {
        type: String,
        required: true,
    },
    attendance: {
        type: Boolean,
        default: false,
    }
});

const TeamModel = new mongoose.model("Team", TeamSchema, 'coders_cup_attendance');

module.exports = TeamModel;