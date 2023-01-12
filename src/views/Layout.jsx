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

          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a href="/" className="btn btn-light">Main</a>
              <form className="d-flex " role="search">
                <a href="/admin/logout" className="btn btn-light">logout</a>
                <a href="#0" className="btn btn-light" type="submit">About us</a>
                <a href="#0" className="btn btn-light" type="submit">Contacts</a>
              </form>
            </div>
          </nav>
        ) : (
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a href="/" className="btn btn-light">Main</a>
              <form className="d-flex " role="search">
                <a href="/admin/login" className="btn btn-light">Admin</a>
                <a href="#about" className="btn btn-light" type="submit">About us</a>
                <a href="#0" className="btn btn-light" type="submit">Contacts</a>
              </form>
            </div>
          </nav>

        )}
        { children }
      </body>

      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">

          <li className="nav-item">
            <a href="tel:+74999386824" className="nav-link px-2 text-muted" title="Позвони нам!">
              Telephone number
            </a>
          </li>

          <li className="nav-item">
            <a href="mailto:exclusivewatch@mail.ru" title="Напишите нам 😎" className="nav-link px-2 text-muted">
              E-mail
            </a>
          </li>

          <li className="nav-item">
            <a href="https://bit.ly/3IFNXVJ" className="nav-link px-2 text-muted" title="Кликай сюда">
              Adress
            </a>
          </li>

          <li className="nav-item">
            <a href="https://elbrusboot.camp/" className="nav-link px-2 text-muted" title="Тут можно почитать о нас">
              Social network
            </a>
          </li>

          <li className="nav-item">
            <a href="/#" title="Вернуться наверх" className="nav-link px-2 text-muted">
              Back to top
            </a>
          </li>

        </ul>
        <p14 className="text-center text-muted">&copy; 2023 Exclusive Watch Company, Inc</p14>
      </footer>

    </html>
  );
};
