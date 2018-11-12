const companyController = require('../controllers').company

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the company API!',
  }))
  
  app.get('/api/company', companyController.list)
  app.post('/api/company', companyController.create)
  

  // Setup a default catch-all route that sends back a welcome message in JSON format.
  app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
  }))

}