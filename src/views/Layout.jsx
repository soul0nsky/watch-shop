const React = require('react');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
        <link href="/css/style.css" rel="stylesheet" />
        <script defer src="/js/application.js" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous" />
        <title>{user ? `Hi ${user}` : 'Hi, codder'}</title>
      </head>
      <body>
        <nav className="navbar bg-light container-fluid" style={{ justifyContent: 'space-evenly' }}>
          <a href="/">
            <button className="btn btn-outline-success me-2" type="button">Main</button>
          </a>
          <a href="/register">
            <button className="btn btn-sm btn-outline-secondary" type="button">Register</button>
          </a>
          <a href="/">
            <button className="btn btn-sm btn-outline-secondary" type="button">Your button</button>
          </a>
        </nav>
        { children }
      </body>
    </html>
  );
};
