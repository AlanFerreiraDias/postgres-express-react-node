const company = require('../../models').company

module.exports = {
  create(req, res) {
    return company
      .create({
        legal_name: req.body.legal_name,
        trade_name: req.body.trade_name,
        legal_type: req.body.legal_type,
        registration_number: req.body.registration_number,
        address: req.body.address,
        phone: req.body.phone
      })
      .then(company => res.status(201).send(company))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return company
      .findAll()
      .then(company => res.status(200).send(company))
      .catch(error => res.status(400).send(error));
  },
}