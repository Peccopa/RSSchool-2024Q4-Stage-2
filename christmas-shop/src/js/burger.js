import { scroll } from './scroll.js';

export const burger = {
  menu: document.querySelector('.burger'),
  nav: document.querySelector('.nav'),
  openBurgerMenu() {
    if (
      !burger.menu.classList.contains('burger_opened') &&
      window.innerWidth <= 768
    ) {
      burger.menu.classList.add('burger_opened');
      burger.nav.classList.add('nav_opened');
      scroll.hideScroll();
    } else if (window.innerWidth <= 768) {
      burger.menu.classList.remove('burger_opened');
      burger.nav.classList.remove('nav_opened');
      scroll.hideScroll();
    }
  },
};
