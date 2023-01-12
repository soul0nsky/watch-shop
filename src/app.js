require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const fs = require('fs');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { sequelize } = require('../db/models');

const mainRouter = require('./routes/router.main');
const loginRouter = require('./routes/router.login');
const logoutRouter = require('./routes/router.logout');
const formRouter = require('./routes/router.form');
const orderRouter = require('./routes/router.order');

const app = express();
const { PORT, SESSION_SECRET } = process.env;

const sessionConfig = {
  name: 'NewCookie',
  store: new FileStore(),
  secret: SESSION_SECRET ?? 'Секретное слово',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 172800000,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' },
);

app.use(logger('combined', { stream: accessLogStream }));
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', mainRouter);
app.use('/form', formRouter);
app.use('/admin', loginRouter);
app.use('/admin', logoutRouter);
app.use('/order', orderRouter);

app.use((req, res, next) => {
  console.log('req.session=>>>', req.session);
  next();
});

app.use((req, res, next) => {
  const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
  next(error);
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединенились с БД, и слава Богу!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер в приподнятом настроении на ${PORT} порту!`);
});
