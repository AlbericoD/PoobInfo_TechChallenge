const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
/*
CustomerID (int)
• CompanyID (short)
• CreateDate (datetime)
• RewardsNumber (string)
• Name (string)
• Email (string)
• DOB (datetime)
*/
const CustomerSchema = new mongoose.Schema({
  customerID: {},
  companyID: {},
  createDate: { type: Date, default: Date.now },
  rewardsNumber: {},
  name: {},
  email: {},
  dbo: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Customer', CustomerSchema);
