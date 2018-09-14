const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();
app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-Requested-With'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST,PUT,DELETE'
  );
  res.setHeader('Access-Control-Allow-Origin', '*');
  return next();
});

const { catchAll, notFound } = require('./error');
const companyRouter = require('./company/company.router');
const customerRouter = require('./customer/customer.router');

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
