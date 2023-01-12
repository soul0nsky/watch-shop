const React = require('react');

module.exports = function Footer() {
  return (
    <footer id="footer" className="footer-page py-3 my-4">
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
          <a href="https://bit.ly/3IFNXVJ" className="nav-link px-2 text-muted" title="Кликай вот сюда">
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
  );
};
