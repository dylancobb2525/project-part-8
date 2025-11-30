# MongoDB Integration Guide

## Overview
This guide explains how to integrate MongoDB into your travel server to make data persistent. The client-side React app is already set up and ready to work with MongoDB once the server is updated.

## Client-Side Status ✅
The React client is **already configured** and ready. No changes needed to the client code. It will automatically work with MongoDB once the server is updated.

## Server-Side Integration Required

### Step 1: Access Your Server Repository
Your server code is at: `https://github.com/dylancobb2525/travel-server.git`

### Step 2: Install MongoDB Package
In your server repository, run:
```bash
npm install mongoose
```

### Step 3: Set Up MongoDB Connection

1. **Get MongoDB Connection String:**
   - Option A: MongoDB Atlas (Recommended - Free cloud database)
     - Sign up at https://www.mongodb.com/cloud/atlas
     - Create a free cluster
     - Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/database`)
   
   - Option B: Local MongoDB
     - Install MongoDB locally
     - Use: `mongodb://localhost:27017/travel-db`

2. **Add Connection File:**
   - Copy `server-mongodb-integration/db.js` to your server repo
   - Update the connection string or use environment variable `MONGODB_URI`

3. **Set Environment Variable:**
   - In Render dashboard → Your service → Environment variables
   - Add: `MONGODB_URI` with your connection string

### Step 4: Create Destination Model

1. Create a `models` folder in your server repo
2. Copy `server-mongodb-integration/Destination.js` to `models/Destination.js`
3. This defines the schema for your destinations

### Step 5: Update Your Routes

1. Open your routes file (likely `routes/destinations.js` or similar)
2. Replace your existing routes with the MongoDB versions from `server-mongodb-integration/routes-example.js`
3. Key changes:
   - Import: `const Destination = require('../models/Destination')`
   - GET all: `await Destination.find()`
   - GET one: `await Destination.findById(id)`
   - POST: `new Destination(data).save()`
   - PUT: Update and `destination.save()`
   - DELETE: `Destination.findByIdAndDelete(id)`

### Step 6: Update Main Server File

1. Open your main server file (`server.js` or `index.js`)
2. Add at the top:
   ```javascript
   const connectDB = require('./db');
   ```
3. Call `connectDB()` before setting up routes

### Step 7: Test Locally

1. Make sure MongoDB is running (or use Atlas)
2. Set `MONGODB_URI` in your `.env` file
3. Start server: `npm start`
4. Test adding/editing/deleting destinations
5. Verify data appears in MongoDB

### Step 8: Deploy to Render

1. Push changes to GitHub
2. Render will auto-deploy
3. Make sure `MONGODB_URI` environment variable is set in Render dashboard
4. Test the live server

## Important Notes

- **Images**: On free Render plan, uploaded images won't persist after server restart, but image paths will be stored in MongoDB
- **Data**: All destination data (name, description, category) will persist in MongoDB
- **Validation**: Joi validation remains in place
- **Client**: No changes needed to React app - it will work automatically

## Files to Add to Server Repo

1. `db.js` - MongoDB connection
2. `models/Destination.js` - Destination schema
3. Update your routes file with MongoDB operations
4. Update main server file to call `connectDB()`

## Testing Checklist

After integration, verify:
- [ ] GET all destinations returns data from MongoDB
- [ ] POST new destination saves to MongoDB
- [ ] PUT update destination updates in MongoDB
- [ ] DELETE destination removes from MongoDB
- [ ] Data persists after server restart
- [ ] Client-side forms work correctly
- [ ] Images upload (even if they don't persist)

## Need Help?

Reference files are in `server-mongodb-integration/` folder:
- `db.js` - Connection setup
- `Destination.js` - Schema/model
- `routes-example.js` - Complete route examples
- `server-example.js` - Server setup example

