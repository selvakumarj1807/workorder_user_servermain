const express = require('express');
const { newPayment, getPayment } = require('../controllers/paymentModelController');
const router = express.Router();

router.route('/payment/new').post(newPayment);
router.route('/payment').get(getPayment);

module.exports = router;