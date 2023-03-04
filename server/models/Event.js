const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    customer_first: {
        type: String,
        required: true
    },
    customer_last: {
        type: String,
        required: true
    },
    address: String,
    from: String,
    price: {
        type: Number,
        required: true
    },
    payment_type: {
        type: String,
        required: true
    }

})

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;