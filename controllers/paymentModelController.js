const Payment = require('../models/paymentModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');
const APIFeatures = require('../utils/apiFeatures');

//create tracking - /api/v1/tracking/new
exports.newPayment = catchAsyncError(async (req, res, next) => {
    const payment = await Payment.create(req.body);
    res.status(201).json({
        success: true,
        payment
    })
});

//get tracking - /api/v1/tracking
exports.getPayment = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(Payment.find(), req.query).search().filter();

    const payment = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: payment.length,
        payment
    })
}
