const menu = document.getElementById('menu');
const nav = document.querySelector('.nav');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

menu?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});
