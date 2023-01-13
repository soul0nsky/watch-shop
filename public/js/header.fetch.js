const header = document.getElementById('header-page');
/* eslint-disable no-undef */
// const main = document.getElementById('main-container');
// main используется при подключении скрипта main.fetch.js
// после раскоментирования строки 2 скрипт работать не будет

header.addEventListener('click', async (e) => {
  // e.preventDefault();

  if (e.target.id === 'main-link') {
    const response = await fetch(e.target.href);

    const html = await response.text();

    const from = html.indexOf('<main');
    const to = html.indexOf('<footer');
    main.innerHTML = '';
    main.innerHTML = html.slice(from, to);
  }

  if (e.target.dataset.type === 'admin-login') {
    const response = await fetch(e.target.href);

    const html = await response.text();
    const from = html.indexOf('<main');
    const to = html.indexOf('<footer');
    main.innerHTML = '';
    main.innerHTML = html.slice(from, to);
  }
});
