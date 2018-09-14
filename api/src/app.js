const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');

const app = express();
const { catchAll, notFound } = require('./error');
const companyRouter = require('./company/company.router');

app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/company', companyRouter);

app.use(notFound);
app.use(catchAll);

module.exports = app;
