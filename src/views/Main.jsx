const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user }) {
  return (
    <Layout user={user}>
      <div className="main-container container">

        <div className="row row-cols-2 greeting-main">
          <h1 style={{ fontSize: '60px' }}>
            {user ? `Привет ${user}` : 'Привет, codder'}
          </h1>
        </div>

      </div>
    </Layout>
  );
};
