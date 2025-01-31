import { burger } from './burger.js';
import { Modal } from './modal.js';
import { pageup } from './pageup.js';
import { scroll } from './scroll.js';
import { tabs } from './tabs.js';

export const links = {
  checkPageAndGoToAnother() {
    window.location.href =
      window.location.pathname.split('/').length > 4
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
    const overlay = document.querySelector('.overlay');

    if (
      target.value.substring(0, 9) === 'gift-card' &&
      !overlay.classList.contains('show-overlay') &&
      !document.querySelector('.modal')
    ) {
      overlay.classList.add('show-overlay');
      scroll.hideScroll();
      document.addEventListener('keyup', links.escapeListener);
      const targetText = e.target
        .closest('.gift-card')
        .querySelector('.gift-card__h3').textContent;
      const cardObj = tabs.data.find((e) => e.name === targetText);
      const modal = new Modal(cardObj);
      modal.generateModal(document.querySelector('.overlay'));
      pageup.showPageUpIco();
    }

    if (target.contains('overlay') && document.querySelector('.modal')) {
      setTimeout(() => {
        document.querySelector('.overlay').classList.remove('show-overlay');
      }, 150);
      scroll.hideScroll();
      document.removeEventListener('keyup', links.escapeListener);
      links.removeModalCard();
    }

    if (
      target.value.substring(0, 5) === 'modal' &&
      target.value !== 'modal__descr' &&
      target.value !== 'modal__stats' &&
      document.querySelector('.modal')
    ) {
      scroll.hideScroll();
      document.removeEventListener('keyup', links.escapeListener);
      links.removeModalCard();
      setTimeout(() => {
        document.querySelector('.overlay').classList.remove('show-overlay');
      }, 150);
    }

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
      setTimeout(() => {
        document.querySelector('.overlay').classList.remove('show-overlay');
      }, 150);
      scroll.hideScroll();
      document.removeEventListener('keyup', links.escapeListener);
      links.removeModalCard();
    }
  },
  removeModalCard() {
    const card = document.querySelector('.modal');
    setTimeout(() => {
      card.classList.add('hide-modal');
    }, 0);
    setTimeout(() => {
      card.remove();
      pageup.showPageUpIco();
    }, 300);
  },
};
