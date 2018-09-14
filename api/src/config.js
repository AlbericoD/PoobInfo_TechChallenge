require('dotenv').config();

const environment = ['NODE_ENV', 'POOB_DATABASE', 'PORT'];

environment.forEach(name => {
  if (!process.env[name]) {
    throw new Error(`${name}: ${process.env[name]}`);
  }
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  POOB_DATABASE: process.env.POOB_DATABASE,
  PORT: process.env.PORT
};
