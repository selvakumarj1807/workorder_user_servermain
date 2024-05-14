const express = require('express');
const { newTracking, getTracking } = require('../controllers/trackingModelController');
const router = express.Router();

router.route('/tracking/new').post(newTracking);
router.route('/tracking').get(getTracking);

module.exports = router;