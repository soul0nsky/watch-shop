const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');

router.get('/', async (req, res) => {
  try {
    const admin = req.session?.admin;
    renderTemplate(Main, { admin }, res);
  } catch (error) {
    console.log('======> error', error);
    // renderTemplate(Error, {
    //   message: 'Не удалось получить записи из базы данных.',
    //   error: {},
    // }, res);
  }
});

module.exports = router;
