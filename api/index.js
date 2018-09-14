const mongoose = require('mongoose');
const winston = require('winston');

const app = require('./src/app');
const config = require('./src/config');

mongoose.connect(config.POOB_DATABASE);
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
  winston.info('Poob BD  connected!');
});

mongoose.connection.on('disconnected', () => {
  winston.warn('Poob BD disconnected!');
  process.exit(1);
});

mongoose.connection.on('error', err => {
  winston.error('Poob BD Error!', err.message);
  process.exit(1);
});

require('./src/company/company.model');

app.listen(config.PORT, () => {
  Object.keys(config).forEach(key => winston.info(`${key}: ${config[key]}`));
  winston.info('Poob Express is running...');
});
