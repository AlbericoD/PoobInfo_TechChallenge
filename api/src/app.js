const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');

const app = express();
const { catchAll, notFound } = require('./error');
const companyRouter = require('./company/company.router');
const customerRouter = require('./customer/customer.router');
const path = require('path');

app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  '/public',
  express.static(path.join(__dirname, '../../frontend/build/'))
);
app.use(
  '/static',
  express.static(path.join(__dirname, '../../frontend/build/static/'))
);
app.use('/api/company', companyRouter);
app.use('/api/customer', customerRouter);

app.use(notFound);
app.use(catchAll);

module.exports = app;
