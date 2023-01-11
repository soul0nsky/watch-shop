const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ admin }) {
  return (
    <Layout admin={admin}>
      <div className="main-container container">
        <div className="row row-cols-2 greeting-main">
          <h1 style={{ fontSize: '60px' }}>
            {admin ? `Привет, admin ${admin}` : 'Привет, codder'}
          </h1>
        </div>
      </div>
    </Layout>
  );
};
