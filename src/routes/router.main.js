const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');

router.get('/', async (req, res) => {
  try {
    const user = req.session?.userName;
    renderTemplate(Main, { user }, res);
  } catch (error) {
    console.log('======> error', error);
    // renderTemplate(Error, {
    //   message: 'Не удалось получить записи из базы данных.',
    //   error: {},
    // }, res);
  }
});

module.exports = router;
