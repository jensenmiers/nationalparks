const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    parkId: { type: String, required: true },
    text: { type: String, required: true },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
