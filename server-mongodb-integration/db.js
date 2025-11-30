// MongoDB Connection File
// Add this to your server repository

const mongoose = require('mongoose');

// MongoDB connection string - replace with your actual MongoDB connection string
// For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
// For local MongoDB: mongodb://localhost:27017/travel-db
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/travel-db';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;

