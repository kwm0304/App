const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
    start: Date,
    end: Date,
    title: String
})

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;