const React = require('react');
const Layout = require('./Layout');

module.exports = function Form() {
  return (
    <Layout>
      <div className="form-container registration">
        <form action="/form" method="POST">
          <h3>Связаться с нами</h3>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Имя
            </label>
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              name="username"
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Электронная почта
            </label>
            <input
              type="text"
              id="form2Example2"
              className="form-control"
              name="email"
            />
          </div>
          <label className="form-label" htmlFor="form2Example2">
            Телефон
          </label>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form2Example2"
              className="form-control"
              name="phone"
            />
          </div>
          <button
            type="submit"
            data-type="login-button"
            className="btn btn-primary btn-block mb-4"
          >
            Отправить
          </button>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              img.net
            </label>
            <textarea
              type="text"
              id="form2Example1"
              className="form-control"
              name="text"
              placeholder="Описание часов"
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              name="href"
              placeholder="Вставить ссылку"
            />
          </div>
          <button
            type="submit"
            data-type="login-button"
            className="btn btn-primary btn-block mb-4"
          >
            Загрузить
          </button>
          <button
            type="submit"
            data-type="login-button"
            className="btn btn-primary btn-block mb-4"
          >
            Отправить
          </button>
        </form>
      </div>
    </Layout>
  );
};
