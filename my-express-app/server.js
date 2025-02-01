//server.js
const express = require('express');
const mongoose = require('mongoose')
const Reviews = require('./models/Review');
const Users = require('./models/User');
const Parks = require('./models/Park')



const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
    console.log('Connected to MongoDB')
});
