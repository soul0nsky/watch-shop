const React = require('react');
// const Layout = require('./Layout');

module.exports = function WatchCard({ watch }) {
  const { watch_name: title, description } = watch;
  return (
    <div className="watch-card card text-center mb-5" style={{ width: '30rem' }}>
      <img src="#0" className="card-img-top" alt="Наручные часы" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#0" className="btn btn-primary">Заказать</a>
      </div>
    </div>
  );
};
