const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require("express-rate-limit");
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use(cors());
app.use(morgan('dev')); // use 'combined' for detailed logs
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);

const userRoutes = require('./routes/user');
const quoteRoutes = require('./routes/quote');
const appointmentRoutes = require('./routes/appointment');
const authRoutes = require('./routes/auth');

app.use('/user', userRoutes);
app.use('/quote', quoteRoutes);
app.use('/appointment', appointmentRoutes);
app.use('/auth', authRoutes);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
