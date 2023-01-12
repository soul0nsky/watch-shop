const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Order = require('../views/FormOrder');

const { User } = require('../../db/models');

router.get('/', (req, res) => {
  try {
    renderTemplate(Order, {}, res);
  } catch (error) {
    console.log('======> error', error);
  }
});

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.redirect('/');
  } catch (error) {
    console.log('========>  router.oder  error', error);
  }
});

module.exports = router;
