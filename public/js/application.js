const main = document.querySelector('.main-container');

main.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.dataset.type === 'form-order-btn') {
    const form = e.target.closest('form');
    const {
      userName: { value: user_name },
      lastname: { value: lastname },
      phone: { value: phone },
      email: { value: email },
    } = form;
    console.log(user_name, lastname, phone, email);
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
    console.log(html);
    main.innerHTML = html;
  }
});
