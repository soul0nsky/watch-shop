const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <section className="login-section">
        <div id="wrapper">
          <form id="login" method="POST" action="/admin/login" autoComplete="off">
            <input type="text" id="user" name="login" placeholder="admin" />
            <input type="password" id="pass" name="password" placeholder="password" />
            <button type="submit">&#xf0da;</button>
          </form>
        </div>
      </section>
    </Layout>
  );
};
