// Example routes with MongoDB integration
// Replace your existing routes with this pattern

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Joi = require('joi');
const Destination = require('../models/Destination'); // Adjust path as needed

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, '../images');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Joi validation schema
const destinationSchema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().min(10).required(),
    category: Joi.string().valid('US', 'International', 'Bucket List').required()
});

// GET all destinations
router.get('/', async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.json(destinations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET a single destination by ID
router.get('/:id', async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        if (!destination) {
            return res.status(404).json({ error: 'Destination not found' });
        }
        res.json(destination);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST - Create a new destination
router.post('/', upload.single('img'), async (req, res) => {
    try {
        // Extract form data
        const { name, description, category } = req.body;

        // Validate with Joi
        const { error } = destinationSchema.validate({ name, description, category });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        // Handle image upload
        let imagePath = '';
        if (req.file) {
            // Store relative path - images won't persist on free Render plan
            imagePath = `images/${req.file.filename}`;
        }

        // Create new destination in MongoDB
        const destination = new Destination({
            name,
            description,
            category,
            main_image: imagePath
        });

        const savedDestination = await destination.save();
        res.status(200).json(savedDestination);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT - Update a destination
router.put('/:id', upload.single('img'), async (req, res) => {
    try {
        const { name, description, category } = req.body;

        // Validate with Joi
        const { error } = destinationSchema.validate({ name, description, category });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        // Find the destination
        const destination = await Destination.findById(req.params.id);
        if (!destination) {
            return res.status(404).json({ error: 'Destination not found' });
        }

        // Update fields
        destination.name = name;
        destination.description = description;
        destination.category = category;

        // Handle image update if new image is uploaded
        if (req.file) {
            // Delete old image if it exists (optional, since images won't persist anyway)
            if (destination.main_image) {
                const oldImagePath = path.join(__dirname, '../', destination.main_image);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }
            destination.main_image = `images/${req.file.filename}`;
        }

        const updatedDestination = await destination.save();
        res.status(200).json(updatedDestination);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE - Delete a destination
router.delete('/:id', async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        if (!destination) {
            return res.status(404).json({ error: 'Destination not found' });
        }

        // Delete image file if it exists (optional)
        if (destination.main_image) {
            const imagePath = path.join(__dirname, '../', destination.main_image);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await Destination.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Destination deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

