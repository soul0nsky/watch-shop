const React = require('react');

module.exports = function Header({ admin }) {
  return (
    <header>
      {admin ? (
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a href="/" className="btn btn-light">Main</a>
            <ul className="d-flex " role="search">
              <li>
                <a href="/admin/logout" method="POST" className="btn btn-light admin-btn">Logout</a>
              </li>
              <li>
                <a href="#about" className="btn btn-light">About us</a>
              </li>
              <li>
                <a href="#footer" className="btn btn-light last-btn">Contacts</a>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a href="/" className="btn btn-light">Main</a>
            <ul className="d-flex " role="search">
              <li>
                <a href="/admin/login" method="POST" className="btn btn-light admin-btn">Admin</a>
              </li>
              <li>
                <a href="#about" className="btn btn-light">About us</a>
              </li>
              <li>
                <a href="#footer" className="btn btn-light last-btn">Contacts</a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};
