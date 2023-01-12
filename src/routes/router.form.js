const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Form = require('../views/Forms/Form');

router.get('/', (req, res) => {
  try {
    renderTemplate(Form, {}, res);
  } catch (error) {
    console.log('======> error', error);
  }
});

// router.post('/', async (req, res) => {
//   const {name, email, phone} = req.body
//   const newForm = await
// })

module.exports = router;
