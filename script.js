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
    dimbkg.style.display = 'none';
  }
}

menu.addEventListener('click', toggle);

// sticky header
// window.onscroll = function () {
//   myFunction();
// };

// var header = document.getElementById('news-header');
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add('sticky');
//   } else {
//     header.classList.remove('sticky');
//   }
// }
