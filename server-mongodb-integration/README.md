# MongoDB Integration for Travel Server

This folder contains the MongoDB integration code for your travel server. Follow these steps to integrate MongoDB into your server repository.

## Steps to Integrate MongoDB

### 1. Install Required Packages

In your server repository, run:
```bash
npm install mongoose
```

(You should already have `multer` and `joi` installed from previous work)

### 2. Set Up MongoDB Connection

1. Copy `db.js` to your server repository (e.g., `db.js` or `config/db.js`)
2. Get your MongoDB connection string:
   - For MongoDB Atlas (cloud): Sign up at https://www.mongodb.com/cloud/atlas and create a free cluster
   - For local MongoDB: Use `mongodb://localhost:27017/travel-db`
3. Set the `MONGODB_URI` environment variable in your `.env` file or Render environment variables:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/travel-db?retryWrites=true&w=majority
   ```

### 3. Create the Destination Model

1. Create a `models` folder in your server repository
2. Copy `Destination.js` to `models/Destination.js`
3. Adjust the schema fields if needed to match your current data structure

### 4. Update Your Routes

1. Update your routes file (e.g., `routes/destinations.js` or `routes/api.js`) with the pattern shown in `routes-example.js`
2. Replace your existing GET, POST, PUT, DELETE routes with the MongoDB versions
3. Make sure to:
   - Import the Destination model
   - Use `await Destination.find()` for GET all
   - Use `await Destination.findById()` for GET one
   - Use `new Destination()` and `.save()` for POST
   - Use `.findByIdAndUpdate()` or `.save()` for PUT
   - Use `Destination.findByIdAndDelete()` for DELETE

### 5. Update Your Main Server File

1. Update your main server file (e.g., `server.js` or `index.js`) to include:
   ```javascript
   const connectDB = require('./db');
   connectDB();
   ```
2. Make sure this is called before your routes are set up

### 6. Environment Variables on Render

1. Go to your Render dashboard
2. Navigate to your service
3. Go to Environment variables
4. Add `MONGODB_URI` with your MongoDB connection string

### 7. Test Locally

1. Make sure MongoDB is running locally (or use MongoDB Atlas)
2. Start your server: `npm start` or `node server.js`
3. Test adding, editing, and deleting destinations
4. Verify data persists in MongoDB

### 8. Deploy to Render

1. Push your changes to GitHub
2. Render will automatically redeploy
3. Make sure the `MONGODB_URI` environment variable is set in Render

## Important Notes

- **Images won't persist on free Render plan**: The image files will be deleted when Render restarts, but the image paths will be stored in MongoDB. Images will work for the session but won't persist after restart.
- **Data will persist**: All destination data (name, description, category, etc.) will be saved in MongoDB and will persist across server restarts.
- **Validation**: Joi validation is still in place to ensure data quality.

## File Structure

Your server should have a structure like:
```
server/
├── db.js (or config/db.js)
├── server.js (or index.js)
├── models/
│   └── Destination.js
├── routes/
│   └── destinations.js (or api.js)
├── images/
│   └── (uploaded images)
├── package.json
└── .env (for local development)
```

## Testing

After integration, test:
1. ✅ GET all destinations - should return data from MongoDB
2. ✅ POST new destination - should save to MongoDB
3. ✅ PUT update destination - should update in MongoDB
4. ✅ DELETE destination - should remove from MongoDB
5. ✅ Data persists after server restart

