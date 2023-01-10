const React = require('react');
const Layout = require('./Layout');

module.exports = function Register() {
  return (
    <Layout>
      <div className="register-box">
        <form action="/register" method="POST">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              User name
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="username" />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
            </label>
            <div id="emailHelp" className="form-text">We&apos;ll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
              <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </Layout>
  );
};
