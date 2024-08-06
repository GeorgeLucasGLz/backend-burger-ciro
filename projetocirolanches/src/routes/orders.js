
const express = require('express');
const router = express.Router();
const { calculateOrder } = require('../controllers/ordersController');
const auth = require('../middleware/auth');

router.post('/calculate', auth, calculateOrder);

module.exports = router;
