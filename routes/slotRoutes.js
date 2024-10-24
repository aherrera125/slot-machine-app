const express = require('express');
const router = express.Router();
const slotController = require('../controllers/slotController');

// Endpoint to handle spin
router.get('/spin', slotController.handleSpin);

module.exports = router;
