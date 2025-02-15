require('dotenv').config(); // load environment variables from .env file
const mongoose = require('mongoose')

async function connectDB() {
    try {
        console.log('MongoDB URI:', process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ MongoDB Connected Successfully');
    } catch (error) {
        console.error('❌ MongoDB Connection Failed:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;