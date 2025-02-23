//server.js
require('dotenv').config(); // load environment variables from .env file
console.log("✅ Loaded PORT in server.js:", process.env.PORT);
console.log("✅ Loaded MONGODB_URI in server.js:", process.env.MONGODB_URI);
const express = require('express');
const connectDB = require('./database');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 3001;

const Review = require('./models/Review');
const User = require('./models/User');
const Park = require('./models/Park')

// Middleware to parse JSON bodies
app.use(express.json());
app.use(helmet());
app.use(morgan('combined'));

// connect to MongoDB
connectDB();

// Routes
app.use('/api/parks', require('./routes/parks'));
app.use('/api/users', require('./routes/users'));
app.use('/api/reviews', require('./routes/reviews'));

// default route
app.get('/', (req, res) => {
    res.send('The Express server is running for the National Parks API');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// start the server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});