const React = require('react');
const Layout = require('./Layout');

module.exports = function Form() {
  return (
    <Layout>
      <div className="form container registration">
        <form action="/form" method="POST">
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              name="username"
            />
            <label className="form-label" htmlFor="form2Example1">
              Имя
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form2Example2"
              className="form-control"
              name="email"
            />
            <label className="form-label" htmlFor="form2Example2">
              Электронная почта
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form2Example2"
              className="form-control"
              name="phone"
            />
            <label className="form-label" htmlFor="form2Example2">
              Телефон
            </label>
          </div>
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
