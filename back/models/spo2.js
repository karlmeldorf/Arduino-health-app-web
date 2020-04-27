const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spo2Schema = new Schema({
    spo2: { type: Number, required: true },
    pulse: { type: Number, required: true },
    user: { type: String, required: false }
}, { timestamps: true });

module.exports = mongoose.model('Spo2', spo2Schema);