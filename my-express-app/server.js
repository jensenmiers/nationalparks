//server.js
const express = require('express');
require('dotenv').config(); // load environment variables from .env file

const connectDB = require('./database');
const Review = require('./models/Review');
const User = require('./models/User');
const Park = require('./models/Park')

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// connect to MongoDB
connectDB();

// Routes
// app.use('/api/parks', require('./routes/parks'));
// app.use('/api/users', require('./routes/users'));
// app.use('/api/reviews', require('./routes/reviews'));

// default route
app.get('/', (req, res) => {
    res.send('The Express server is running for the National Parks API');
});

// start the server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});