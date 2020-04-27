const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bloodpressureSchema = new Schema({
    systolic: { type: Number, required: true },
    diastolic: { type: Number, required: true },
    pulse: { type: Number, required: true },
    user: { type: String, required: false }
}, { timestamps: true });

module.exports = mongoose.model('Bloodpressure', bloodpressureSchema);