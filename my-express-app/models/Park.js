const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    id: String,
    name: String
});

const imageSchema = new mongoose.Schema({
    credit: String,
    title: String,
    altText: String,
    caption: String,
    url: String
});

const entranceFeeSchema = new mongoose.Schema({
    cost: String,
    description: String,
    title: String
});

const reviewSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    parkId: { type: String, required: true },
    text: { type: String, required: true },
});


const parkSchema = new mongoose.Schema({
    id: { type: String, required: true },
    City: String,
    State: String,
    ZipCode: String,
    LocationName: String,
    Latitude: String,
    Longitude: String,
    description: String,
    designation: String,
    activities: [activitySchema],
    images: [imageSchema],
    entranceFees: [entranceFeeSchema],
    states: String,
    review: [reviewSchema]
});

const Park = mongoose.model('Park', parkSchema);

module.exports = Park