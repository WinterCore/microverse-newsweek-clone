const navHamburger = document.querySelector('#nav-toggler');
const nav = document.querySelector('#nav');

navHamburger.addEventListener('click', () => {
  if (navHamburger.classList.contains('active')) {
    navHamburger.classList.remove('active');
    nav.classList.remove('shown');
  } else {
    navHamburger.classList.add('active');
    nav.classList.add('shown');
  }
});