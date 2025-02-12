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

// Get a specific park by ID
router.get('/:id', async (req, res) => {
    try {
        const park = await Park.findById(req.params.id);
        if (!park) return res.status(404).json({ message: 'Park not found' });
        res.status(200).json(park);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
