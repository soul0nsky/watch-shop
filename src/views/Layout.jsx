const React = require('react');
const Header = require('./Header');
const Footer = require('./Footer');

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
        <link href="/css/normalize.css" rel="stylesheet" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous" />
        <script defer src="/js/header.fetch.js" />
        <script defer src="/js/main.fetch.js" />
        <script defer src="/js/application.js" />
        <script defer src="/js/form.fetch.js" />
        <title>{admin ? `Hi, ${admin}` : 'Hi, codder'}</title>
      </head>
      <body>
        <Header admin={admin} />
        <main id="main-container">{ children }</main>
        <Footer />
      </body>
    </html>
  );
};
