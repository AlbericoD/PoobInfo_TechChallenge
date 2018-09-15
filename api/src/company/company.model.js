const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

//TODO criar algo dinamico no nome
const CompanySchema = new mongoose.Schema({
  companyID: { type: String },
  name: {
    type: String,
    default: `Company Criar algo dinamico aqui`,
    required: true,
    unique: true
  },
  createDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Company', CompanySchema);
