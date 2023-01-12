const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div className="login-box">
        <form action="/admin/login" method="POST">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Admin
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="login" />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
              <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-login">SEND</button>
        </form>
      </div>
    </Layout>
  );
};
