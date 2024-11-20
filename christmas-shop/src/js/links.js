import { burger } from './burger.js';

export const links = {
  checkClick(e) {
    const target = e.target.classList;
    if (target.contains('gifts-link')) {
      document.querySelector('.page').classList.remove('opacity-1');
      setTimeout(function () {
        window.location.href = './src/pages/gifts.html';
      }, 150);
    } else if (target.contains('home-link')) {
      document.querySelector('.page').classList.remove('opacity-1');
      setTimeout(function () {
        window.location.href =
          window.location.pathname.split('/').length > 3
            ? '../../index.html'
            : './index.html';
      }, 150);
    } else if (target.contains('home-link_about')) {
      document.querySelector('.page').classList.remove('opacity-1');
      setTimeout(function () {
        window.location.href = '../../index.html#about';
      }, 150);
    } else if (target.contains('home-link_best')) {
      document.querySelector('.page').classList.remove('opacity-1');
      setTimeout(function () {
        window.location.href = '../../index.html#best';
      }, 150);
    } else if (target.contains('nav__link')) {
      burger.openBurgerMenu();
    }
  },
};
