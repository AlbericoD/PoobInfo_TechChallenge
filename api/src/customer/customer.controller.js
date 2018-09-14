const Customer = require('./customer.model');

module.exports.create = async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.json(customer);
};

module.exports.list = async (req, res) => {
  const company = await Customer.find();
  res.json(company);
};

module.exports.remove = async (req, res) => {
  await Customer.findByIdAndRemove(req.params.id);
  res.json(req.params.id);
};

module.exports.update = async (req, res) => {
  const company = await Customer.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true
    }
  );
  res.json(company);
};

module.exports.view = async (req, res) => {
  const company = await Customer.findById(req.params.id);
  res.json(company);
};
