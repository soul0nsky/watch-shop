require('dotenv').config();

const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const { Sequelize } = require('sequelize');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const sequelize = new Sequelize({ dialect: 'postgres' });
// Импортируем созданный в отдельный файлах рутеры.
const mainRouter = require('./routes/router.main');
const registerRouter = require('./routes/router.register');

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

// Подключаем middleware morgan с режимом логирования "dev", чтобы для каждого HTTP-запроса на
// сервер в консоль выводилась информация об этом запросе.
app.use(logger('dev'));
// Подключаем middleware, которое сообщает epxress, что в папке "ПапкаПроекта/public" будут
// находится статические файлы, т.е.файлы доступные для скачивания из других приложений.
app.use(express.static(path.join(__dirname, '../public')));
// Подключаем middleware, которое позволяет читать содержимое body из HTTP-запросов
// типа POST, PUT и DELETE.
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые
// в формате JSON в body HTTP - запроса.
app.use(express.json());

app.use('/', mainRouter);
app.use('/register', registerRouter);

app.use((req, res, next) => {
  console.log('req.session=>>>', req.session);
  next();
});

// Если HTTP-запрос дошёл до этой строчки, значит ни один из ранее встречаемых рутов не ответил
// на запрос.Это значит, что искомого раздела просто нет на сайте.Для таких ситуаций используется
// код ошибки 404. Создаём небольшое middleware, которое генерирует соответствующую ошибку.
app.use((req, res, next) => {
  const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
  next(error);
});

// app.listen(PORT, () => {
//   console.log(`server started PORT: ${PORT}`);
// });

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
