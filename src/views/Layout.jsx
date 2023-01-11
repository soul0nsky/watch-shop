const React = require('react');

module.exports = function Layout({ children, admin }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/style-form.css" rel="stylesheet" />
        <script defer src="/js/application.js" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous" />
        <title>{admin ? `Hi, ${admin}` : 'Hi, codder'}</title>
      </head>
      <body>
        {admin ? (
          <nav className="navbar bg-light container-fluid" style={{ justifyContent: 'space-evenly' }}>
            <a href="/">
              <button className="btn btn-outline-success btn-one me-2" type="button">Main</button>
            </a>
            <a href="/admin/logout">
              <button className="btn btn-sm btn-outline-secondary" type="button">Logout</button>
            </a>
            <a href="/">
              <button className="btn btn-sm btn-outline-secondary" type="button">Your button</button>
            </a>
          </nav>
        ) : (
          <div className="container gray highlightTextIn">
            <nav className="navbar" style={{ justifyContent: 'space-evenly' }}>
              <a href="/" alt="HOME">HOME</a>
              <a href="/admin/login" alt="LOGIN">LOGIN</a>
              <a href="#0" alt="ABOUT">ABOUT</a>
              <a href="#0" alt="CONTACT">CONTACT</a>
            </nav>
          </div>
        )}
        { children }
      </body>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
        </ul>
        <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
      </footer>
    </html>
  );
};
