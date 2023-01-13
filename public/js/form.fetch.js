
main.addEventListener('click', async (e) => {
  e.preventDefault();
  console.log('hello');
=======
/* eslint-disable no-undef */
main.addEventListener('click', async (e) => {
  e.preventDefault();


  //* кнопка напишите нам

  if (e.target.id === 'contact') {
    console.log(e.target);
    const responce = await fetch(e.target.href);

    const html = await responce.text();
    const from = html.indexOf('<main');
    const to = html.indexOf('<footer');
    main.innerHTML = '';
    main.innerHTML = html.slice(from, to);
  }

  //* форма отправки заявки  на почту

  if (e.target.dataset.type === 'form-button') {
    const form = e.target.closest('form');
    const {
      username: { value: userName },
      email: { value: email },
      phone: { value: phone },
      text: { value: text },
      href: { value: href },
    } = form;

    const response = await fetch('/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userName, email, phone, text, href,
      }),
    });
    const html = await response.text();
    const from = html.indexOf('<main');
    const to = html.indexOf('<footer');
    main.innerHTML = '';
    main.innerHTML = html.slice(from, to);
  }
});
