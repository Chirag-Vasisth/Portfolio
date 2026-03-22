require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Setup a simple route
app.get('/', (req, res) => {
  res.send('Backend Server is running. Contact route is at /api/contact');
});

// Import Contact Route
const contactRoute = require('./routes/contact');
app.use('/api/contact', contactRoute);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
