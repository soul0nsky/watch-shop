require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const fs = require('fs');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { sequelize } = require('../db/models');

// const sequelize = new Sequelize({ dialect: 'postgres' });
const mainRouter = require('./routes/router.main');
const registerRouter = require('./routes/router.register');
const formRouter = require('./routes/router.form');

const app = express();
const { PORT, SESSION_SECRET } = process.env;

const sessionConfig = {
  name: 'NewCookie',
  store: new FileStore(),
  secret: SESSION_SECRET ?? 'Секретное слово',
  resave: false, // *если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 172800000, // * время жизни в мс 2 суток
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
app.use('/register', registerRouter);
app.use('/form', formRouter);

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
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
