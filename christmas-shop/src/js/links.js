import { burger } from './burger.js';
import { scroll } from './scroll.js';

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

    if (target.value.substring(0, 9) === 'gift-card') {
      document.querySelector('.overlay').classList.add('show-overlay');
      scroll.hideScroll();
      document.addEventListener('keyup', links.escapeListener);

    }

    if (target.contains('overlay')) {
      target.remove('show-overlay');
      scroll.hideScroll();
      document.removeEventListener('keyup', links.escapeListener);
    }

    // document.querySelector('.loading').classList.add('opacity-1');
    // document.querySelector('.loading').style.display = 'block';

    if (target.contains('gifts-link')) links.goToGiftsPage(e);

    if (target.contains('home-link')) {
      if (burger.menu.classList.contains('burger_opened'))
        burger.openBurgerMenu();
      setTimeout(() => {
        document.querySelector('.main').classList.add('opacity-0');
      }, timeout);
      setTimeout(links.checkPageAndGoToAnother, timeout + 300);
    } else if (target.contains('home-link_about')) {
      document
        .querySelector('.nav__link_active')
        .classList.remove('nav__link_active');
      e.target.classList.add('nav__link_active');
      setTimeout(() => {
        document.querySelector('.main').classList.add('opacity-0');
      }, timeout);
      setTimeout(function () {
        window.location.href = '../../index.html#about';
      }, timeout + 300);
    } else if (target.contains('home-link_best')) {
      document
        .querySelector('.nav__link_active')
        .classList.remove('nav__link_active');
      e.target.classList.add('nav__link_active');
      setTimeout(() => {
        document.querySelector('.main').classList.add('opacity-0');
      }, timeout);
      setTimeout(function () {
        window.location.href = '../../index.html#best';
      }, timeout + 300);
    }
    if (target.contains('nav__link')) burger.openBurgerMenu();
  },
  escapeListener(e) {
    if (e.key === 'Escape') {
      document.querySelector('.overlay').classList.remove('show-overlay');
      scroll.hideScroll();
      document.removeEventListener('keyup', links.escapeListener);
    }
  },
};
