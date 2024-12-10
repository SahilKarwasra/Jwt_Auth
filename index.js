require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB } = require('./config/dbConfig');
const authRoutes = require('./routes/authRoutes');
const User = require('./models/user');
const passport = require('./config/passportConfig'); 

const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON requests

// Routes
app.use('/api/auth', authRoutes);

// Start the server and connect to the database
const PORT = process.env.PORT || 5000;
connectDB(); // Connect to the database

// Synchronize the database schema with the models
User.sync({ alter: true }) // This ensures that the User table is created/updated
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error syncing the database:', error);
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
