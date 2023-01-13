const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Form = require('../views/Forms/Form');
const mailer = require('../nodemailer');

router.get('/', (req, res) => {
  try {
    renderTemplate(Form, {}, res);
  } catch (error) {
    console.log('======> error', error);
  }
});

router.post('/', (req, res) => {
  console.log(req.body.email);
  if (!req.body.username || !req.body.email || !req.body.phone) return res.sendStatus(400);
  const message = {
    to: req.body.email,
    subject: ' Поздравляем! Ваш заказ принят!',
    text: ` Ваш заказ успешно принят в обработку!
    Дождитесь звонка от сотрудника нашего магазина.
    Данное письмо не требует ответа!`,
  };
  mailer(message);
  res.redirect('/');
});

module.exports = router;
