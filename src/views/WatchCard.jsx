const React = require('react');
// const Layout = require('./Layout');

module.exports = function WatchCard({ watch }) {
  const { id, watch_name: title, description } = watch;
  console.log(id);
  return (
    <div className="watch-card card text-center mb-5" style={{ width: '30rem' }}>
      <div>
        <img src={`/img/watches/${id}-photo.jpg`} className="watch-img card-img-top" alt="Наручные часы" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#0" className="btn btn-primary">Заказать</a>
      </div>
    </div>
  );
};
