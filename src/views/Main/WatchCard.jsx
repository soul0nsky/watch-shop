const React = require('react');
// const Layout = require('./Layout');

module.exports = function WatchCard({ watch, admin }) {
  const { id, watch_name: title, description } = watch;
  return (

    <article className="watch-card card text-center slider-items">
      <div className="slider-item slider-item-active">
        <img src={`/img/watches/watch-${id}/1-photo.jpg`} className="watch-img card-img-top slider-image" alt="Наручные часы" />
      </div>
      <div className="slider-item">
        <img src={`/img/watches/watch-${id}/2-photo.jpg`} className="watch-img card-img-top slider-image" alt="Наручные часы" />
      </div>
      <div className="slider-item">
        <img src={`/img/watches/watch-${id}/3-photo.jpg`} className="watch-img card-img-top slider-image" alt="Наручные часы" />
      </div>
      <div className="slider-item">
        <img src={`/img/watches/watch-${id}/4-photo.jpg`} className="watch-img card-img-top slider-image" alt="Наручные часы" />
      </div>
      <div className="slider-item">
        <img src={`/img/watches/watch-${id}/5-photo.jpg`} className="watch-img card-img-top slider-image" alt="Наручные часы" />
      </div>
      {/* slider-item-active  slider-dot-active */}
      <div className="slider-navigation">
        <div className="slider-arrows">
          <div className="slider-arrow slider-arrow-prev">&lt;</div>
          <div className="slider-arrow slider-arrow-next">&gt;</div>
        </div>
        <div className="slider-dots">
          <div className="slider-dot" />
          <div className="slider-dot" />
          <div className="slider-dot" />
          <div className="slider-dot" />
          <div className="slider-dot" />
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a id="main-order-btn" href="/order" method="GET" className="btn btn-primary" data-type="main-order-btn">ХОЧУ</a>
      </div>
      {admin ? (<button type="button" className="watch-delete-btn btn" data-type="watch-delete">X</button>) : <span />}
    </article>
  );
};
