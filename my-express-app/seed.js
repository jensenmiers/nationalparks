const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const User = require('./models/User');
const Park = require('./models/Park');
// const Review = require('./models/Review');

require('dotenv').config();

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Clear existing data
        // await User.deleteMany();
        // await Park.deleteMany();
        // await Review.deleteMany();

        // Correctly construct the path to db.json
        const dbPath = path.join(__dirname, '../db.json');
        console.log('Reading data from:', dbPath);

        // Read the file with the correct encoding
        const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
        console.log('Data read from db.json:', data);

        // Check if data contains the expected arrays
        if (!data.users || !data.parks) {
            throw new Error('db.json does not contain the expected structure');
        }

        await User.insertMany(data.users);
        await Park.insertMany(data.parks);
        // no reviews to seed in the original db.json file. these are user generated
        // await Review.insertMany(data.reviews);

        console.log('✅ Database seeded successfully');
        process.exit();
    }catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();
