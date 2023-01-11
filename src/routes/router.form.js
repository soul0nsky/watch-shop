const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Form = require('../views/Form');

router.get('/', (req, res) => {
  try {
    renderTemplate(Form, {}, res);
  } catch (error) {
    console.log('======> error', error);
  }
});

module.exports = router;
