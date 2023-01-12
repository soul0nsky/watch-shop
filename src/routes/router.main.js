const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');
const { Watch } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const admin = req.session?.admin;
    const watches = await Watch.findAll();
    renderTemplate(Main, { admin, watches }, res);
  } catch (error) {
    console.log('======> error', error);
    // renderTemplate(Error, {
    //   message: 'Не удалось получить записи из базы данных.',
    //   error: {},
    // }, res);
  }
});

module.exports = router;
