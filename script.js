const nav = document.querySelector('.main-nav-list');
const menu = document.querySelector('.nav__button');
const dimbkg = document.querySelector('.dim-bkg');

function toggle() {
  if (nav.classList.contains('mobile-nav-open')) {
    nav.classList.remove('mobile-nav-open');
    menu.style.display = 'block';
    dimbkg.style.display = 'none';
  } else {
    nav.classList.add('mobile-nav-open');
    menu.style.display = 'block';
    dimbkg.style.display = 'block';
  }
}

menu.addEventListener('click', toggle);
