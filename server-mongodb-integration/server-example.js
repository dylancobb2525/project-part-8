// Example server.js with MongoDB integration
// Update your main server file to include MongoDB connection

const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./db'); // Adjust path as needed

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (images)
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes
const destinationsRouter = require('./routes/destinations'); // Adjust path as needed
app.use('/api/destinations', destinationsRouter);

// Start server
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

