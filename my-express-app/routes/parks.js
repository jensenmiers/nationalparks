const express = require('express');
const router = express.Router();
const Park = require('.../models/Park');

// Get all parks
router.get('/', async (req, res) => {
    try {
        const parks = await Park.find();
        res.status(200).json(parks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
