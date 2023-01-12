const main = document.getElementById('main-container');

main.addEventListener('click', async (e) => {
  e.preventDefault();

  // кнопка "Хочу"
  if (e.target.dataset.type === 'main-order-btn') {
    const response = await fetch(e.target.href);

    const html = await response.text();
    const from = html.indexOf('<main');
    const to = html.indexOf('<footer');
    main.innerHTML = '';
    main.innerHTML = html.slice(from, to);
  }

  // форма "Ордер"
  if (e.target.dataset.type === 'form-order-btn') {
    const form = e.target.closest('form');
    const {
      user_name: { value: userName },
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
        user_name: userName, lastname, phone, email,
      }),
    });

    const html = await response.text();
    const from = html.indexOf('<main');
    const to = html.indexOf('<footer');
    main.innerHTML = '';
    main.innerHTML = html.slice(from, to);
  }

  // логин админа c перенаправлением на main
  if (e.target.classList.contains('btn-login')) {
    const loginForm = e.target.closest('form');

    const {
      login: { value: login },
      password: { value: password },
      action: url,
    } = loginForm;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
    });

    const html = await response.text();

    if (html) {
      const btnLogin = document.querySelector('.admin-btn');
      btnLogin.textContent = 'Logout';

      const from = html.indexOf('<main');
      const to = html.indexOf('<footer');
      main.innerHTML = '';
      main.innerHTML = html.slice(from, to);
    }
  }
});
