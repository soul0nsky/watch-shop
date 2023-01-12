const header = document.getElementById('header-page');
const main = document.getElementById('main-container');

main.addEventListener('click', async (e) => {
  e.preventDefault();

  // * кнопка "Хочу"
  if (e.target.dataset.type === 'main-order-btn') {
    const response = await fetch(e.target.href);

    const html = await response.text();
    const from = html.indexOf('<main');
    const to = html.indexOf('<footer');
    main.innerHTML = '';
    main.innerHTML = html.slice(from, to);
  }

  // * форма "Ордер"
  if (e.target.dataset.type === 'form-order-btn') {
    const form = e.target.closest('form');
    const {
      userName: { value: user_name },
      lastname: { value: lastname },
      phone: { value: phone },
      email: { value: email },
    } = form;

    const response = await fetch('/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_name, lastname, phone, email,
      }),
    });

    const html = await response.text();
    const from = html.indexOf('<main');
    const to = html.indexOf('<footer');
    main.innerHTML = '';
    main.innerHTML = html.slice(from, to);
  }
});

header.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.id === 'main-link') {
    const response = await fetch(e.target.href);

    const html = await response.text();
    console.log('========>  header.addEventListener  html', html);
    const from = html.indexOf('<main');
    const to = html.indexOf('<footer');
    main.innerHTML = '';
    main.innerHTML = html.slice(from, to);
  }
});
