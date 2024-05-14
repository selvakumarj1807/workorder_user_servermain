const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/error');
const cookieParser = require('cookie-parser')

app.use(express.json());

app.use(cookieParser());

const products = require('./routes/product');
const auth = require('./routes/auth')
const vendorDetail = require('./routes/vendorDetail')
const quoteModel = require('./routes/quoteModel')
const historyModel = require('./routes/historyModel')
const invoiceModel = require('./routes/invoiceModel')
const trackingModel = require('./routes/trackingModel')
const paymentModel = require('./routes/paymentModel')



app.use('/api/v1',products);
app.use('/api/v1',auth);
app.use('/api/v1', vendorDetail);
app.use('/api/v1', quoteModel);
app.use('/api/v1', historyModel);
app.use('/api/v1', invoiceModel);
app.use('/api/v1', trackingModel);
app.use('/api/v1', paymentModel);

app.use(errorMiddleware);

module.exports = app; 