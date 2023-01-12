const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Order = require('../views/FormOrder');

const { User } = require('../../db/models');

router.get('/', (req, res) => {
  try {
    console.log(123455677);
    renderTemplate(Order, {}, res);
  } catch (error) {
    console.log('======> error', error);
  }
});

router.post('/', async (req, res) => {
  console.log(req.body);
  const newUser = await User.create(req.body)
  res.json(newUser);
});

module.exports = router;
