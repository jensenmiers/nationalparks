const mongoose = require('mongoose');

async function connectDB() {
    try {
        const mongoUri = process.env.MONGODB_URI;
        console.log('☁️ Attempting to connect to MongoDB...');
        await mongoose.connect(mongoUri);
        console.log('✅ MongoDB Connected Successfully');
    } catch (error) {
        console.error('❌ MongoDB Connection Failed:', error);
        process.exit(1); // Exit process with failure
    }
}

module.exports = connectDB;