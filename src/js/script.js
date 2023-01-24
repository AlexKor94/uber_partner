window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger'),
    overlay = document.querySelector('.overlay'),
    modal = document.querySelector('#consultation'),
    modal_close = document.querySelector('.modal__close'),
    order_btns = document.querySelectorAll('.take_order'),
    form = document.querySelector('.feed-form');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
    });
  });

  order_btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      overlay.classList.toggle('overlay_show');
    });
  });

  overlay.addEventListener('click', (e) => {
    if (e.target.className == 'modal__close' || e.target.className == 'overlay overlay_show') {
      overlay.classList.remove('overlay_show')
    }
  });

  modal_close.addEventListener('click', () => {
    overlay.classList.toggle('overlay_show');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = 'send.php'; //change url name
    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData.entries()));
    let res = postData(url, formData);
  });
});

async function postData(url, data) {
  const res = await fetch(url, {
    method: "POST",
    body: data
  });

  return await res;
}