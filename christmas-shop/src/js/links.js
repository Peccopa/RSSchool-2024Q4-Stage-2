import { burger } from './burger.js';

export const links = {
  checkPageAndGoToAnother(e) {
    window.location.href =
      window.location.pathname.split('/').length > 3
        ? '../../index.html'
        : './index.html';
  },
  goToGiftsPage(e) {
    e.target.classList.add('nav__link_active');
    if (!burger.menu.classList.contains('burger_opened')) {
      document.querySelector('.main').classList.add('opacity-0');
      setTimeout(function () {
        window.location.href = './src/pages/gifts.html';
      }, 300);
    } else {
      setTimeout(() => {
        document.querySelector('.main').classList.add('opacity-0');
      }, 300);
      setTimeout(function () {
        window.location.href = './src/pages/gifts.html';
      }, 600);
    }
  },
  checkClick(e) {
    const timeout = burger.menu.classList.contains('burger_opened') ? 300 : 0;
    const target = e.target.classList;
    if (target.contains('gifts-link')) links.goToGiftsPage(e);

    if (target.contains('home-link')) {
      if (burger.menu.classList.contains('burger_opened'))
        burger.openBurgerMenu();
      setTimeout(() => {
        document.querySelector('.main').classList.add('opacity-0');
      }, timeout);
      setTimeout(links.checkPageAndGoToAnother, timeout + 300);
    } else if (target.contains('home-link_about')) {
      setTimeout(() => {
        document.querySelector('.main').classList.add('opacity-0');
      }, timeout);
      setTimeout(function () {
        window.location.href = '../../index.html#about';
      }, timeout + 300);
    } else if (target.contains('home-link_best')) {
      setTimeout(() => {
        document.querySelector('.main').classList.add('opacity-0');
      }, timeout);
      setTimeout(function () {
        window.location.href = '../../index.html#best';
      }, timeout + 300);
    }
    if (target.contains('nav__link')) burger.openBurgerMenu();
  },
};
