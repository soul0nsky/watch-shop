const router = require('express').Router();
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const LoginPage = require('../views/LoginPage');
const { Admin } = require('../../db/models');

router
  .get('/login', (req, res) => {
    renderTemplate(LoginPage, {}, res);
  })
  .post('/login', async (req, res) => {
    const { login, password } = req.body;

    try {
      const admin = await Admin.findOne({ where: { login } });
      const match = await bcrypt.compare(password, admin.password);

      if (admin && match) {
        req.session.admin = admin.login;
        req.session.save(() => {
          res.redirect('/');
        });
      }
    } catch (error) {
      console.log('===> error', error);
    }
  });

module.exports = router;
