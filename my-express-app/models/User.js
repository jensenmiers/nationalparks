const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    savedParks: { type: [String], default: [] }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

