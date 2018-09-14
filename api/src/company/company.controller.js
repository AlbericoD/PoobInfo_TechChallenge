const Company = require('./company.model');

module.exports.create = async (req, res) => {
  const company = new Company(req.body);
  await company.save();
  res.json(company);
};

module.exports.list = async (req, res) => {
  const company = await Company.find();
  res.json(company);
};

module.exports.remove = async (req, res) => {
  await Company.findByIdAndRemove(req.params.id);
  res.json(req.params.id);
};

module.exports.update = async (req, res) => {
  const company = await User.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true
    }
  );
  res.json(company);
};

module.exports.view = async (req, res) => {
  const company = await Company.findById(req.params.id);
  res.json(company);
};
