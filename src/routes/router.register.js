const router = require('express').Router();
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const RegisterPage = require('../views/Register');
// const { User } = require('../../db/models');

router
  .get('/', (req, res) => {
    renderTemplate(RegisterPage, {}, res);
  })
  .post('/', async (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body);

    try {
      const hash = await bcrypt.hash(password, 10);
      // const newUser = await User.create({ username, email, password: hash }); создать юзера в БД
      const newUser = { username, email, password: hash };
      console.log(newUser);
      req.session.userName = newUser.username;

      req.session.save(() => {
        res.redirect('/');
      });
    } catch (error) {
      console.log('===> error', error);
    }
  });

module.exports = router;
