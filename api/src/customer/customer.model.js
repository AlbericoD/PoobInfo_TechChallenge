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
  customerID: { type: mongoose.Schema.Types.ObjectId },
  companyID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    unique: true,
    required: true
  },
  createDate: { type: Date, default: Date.now },
  rewardsNumber: { type: String },
  name: { type: String },
  email: { type: String },
  dbo: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Customer', CustomerSchema);
