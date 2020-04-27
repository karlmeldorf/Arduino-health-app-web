const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tempSchema = new Schema({
    temperature: { type: Number, required: true },
    user: { type: String, required: false }
}, { timestamps: true });

module.exports = mongoose.model('Temperature', tempSchema);