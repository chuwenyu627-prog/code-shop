const form = document.querySelector('#bookingForm');
const message = document.querySelector('#formMessage');
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const reservationDate = document.querySelector('#reservationDate');

reservationDate.min = new Date().toISOString().split('T')[0];

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 24);
});

menuToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = '已收到您的预订需求，我们将尽快为您确认席位。';
  form.reset();
});
