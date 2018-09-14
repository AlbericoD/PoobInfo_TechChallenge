const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');

const app = express();
const { catchAll, notFound } = require('./error');
const companyRouter = require('./company/company.router');
const customerRouter = require('./customer/customer.router');

app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/company', companyRouter);
app.use('/api/customerRouter', customerRouter);

app.use(notFound);
app.use(catchAll);

module.exports = app;
