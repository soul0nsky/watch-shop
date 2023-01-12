const React = require('react');
const Layout = require('./Layout');

module.exports = function FormOrder() {
  return (
    <Layout>
      <div className="form-container registration">
        
        <form name="fetchOrder" action="/" method="POST">
          {/* <div className="form-outline mb-4">
            <input
              type="url"
              id="form2Example1"
              className="form-control"
              name="url"
              placeholder="Фото часов"
            />
          </div> */}
          <h3>Фото часов</h3>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Имя
            </label>
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              name="user_name"
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Фамилия
            </label>
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              name="lastname"
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Телефон
            </label>
            <input
              type="text"
              id="form2Example2"
              className="form-control"
              name="phone"
            />
          </div>
          <label className="form-label" htmlFor="form2Example2">
            Электронная почта
          </label>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form2Example2"
              className="form-control"
              name="email"
            />
          </div>
          <button
            type="submit"
            data-type="login-button"
            className="btn btn-primary btn-block mb-4"
          >
            Заказать
          </button>
        </form>
      </div>
    </Layout>
  );
};
