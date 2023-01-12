/* eslint-disable max-len */
const React = require('react');
const Layout = require('../Layout');
const WatchCard = require('./WatchCard');

module.exports = function Main({ admin, watches }) {
  return (
    <Layout admin={admin}>
      <div id="parallax-shop-of-watch">

        {/** верхний блок с названием и логотипом */}
        <div className="Logo">
          <header>
            <img src="/img/pexels-ruslan-alekso-1401847.jpg" className="parallax-img" width="150px" height="150px" align="left" alt="watch" />
            <br />
            <h1>МАГАЗИН НАРУЧНЫХ ЧАСОВ</h1>
            <h3>ЭКСКЛЮЗИВНОЙ РУЧНОЙ РАБОТЫ</h3>
            <p className="line-break1" />
          </header>
        </div>

        <div className="writeUs">
          <span type="submit" data-type="contact-button" className="pulse-button">НАПИШИТЕ НАМ</span>
        </div>

        {/** первый,верхний параллакс */}
        <section>
          <div className="parallax-one">
            <h2>АКТУАЛЬНЫЕ МОДЕЛИ</h2>
            <h4>ДЛЯ УСПЕШНОЙ ЖИЗНИ</h4>
          </div>
        </section>

        {/** блок "О нас" - заголовок */}
        <section>
          <div id="about" className="about">
            <p2>О нас</p2>
          </div>
        </section>

        {/** блок "О нас" - текст */}
        <section>
          <div className="block">
            <p>
              <span className="first-character sc">I</span>
              Наш магазин с 2018 года специализируется на продаже оригинальных часов различным мировых брендов.
              За это время нашими клиентами стали более 3 тысяч человек.
              В нашем магазине представлении наиболее интересные с точки зрения соотношения цена / качество часы.
              Основной костяк наших часов соcтавляют часы американских брендов : Invicta, Aragon, S.Coifman, TechnoMarine и другие.
              У нас вы можете найти как классические и повседневные наручные часы, так и часы по истине поражающие воображение своим дизайна.
            </p>
            <p className="line-break margin-top-20" />
          </div>
        </section>

        {/** второй,нижний параллакс */}
        <section>
          <div className="parallax-two" />
        </section>

        {/** блок "Коллекция часов" */}
        <div className="container-fluid d-flex flex-wrap justify-content-around">
          {watches ? (
            watches.map((watch) => (
              <WatchCard watch={watch} key={watch.id} />
            ))
          ) : (
            <div>Часы не найдены</div>
          )}
        </div>
      </div>
    </Layout>
  );
};
