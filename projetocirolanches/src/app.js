const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const orderRoutes = require('./routes/orders');
const authRoutes = require('./routes/auth');
const logger = require('./utils/logger');

const app = express();

connectDB();

app.use(bodyParser.json());
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

module.exports = app;
