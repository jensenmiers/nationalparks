const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific user
router.get('/:id', async (req, res) => {
    try {
        
        const userId = parseInt(req.params.id);
        const user = await User.findOne({ id: userId});

        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a user
router.patch('/:id', async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const user = await User.findOneAndUpdate(
            { id: userId },
            { $set: req.body },
            { new: true }
        );

        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
