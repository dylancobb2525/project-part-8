// Destination Model/Schema
// Add this to your server repository (e.g., models/Destination.js)

const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        minlength: 10
    },
    category: {
        type: String,
        required: true,
        enum: ['US', 'International', 'Bucket List']
    },
    main_image: {
        type: String,
        required: false // Images won't persist on free Render plan, but path will be stored
    },
    country: {
        type: String,
        required: false
    },
    continent: {
        type: String,
        required: false
    },
    best_time: {
        type: String,
        required: false
    },
    highlights: {
        type: [String],
        required: false
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;

