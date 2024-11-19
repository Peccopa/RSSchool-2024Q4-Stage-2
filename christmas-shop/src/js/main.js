'use strict';

import { loader } from './loader.js';
import { burger } from './burger.js';
import { slider } from './slider.js';
import { timer } from './timer.js';
import { pageup } from './pageup.js';
import { scroll } from './scroll.js';
// import { cards} from './cards.js';
// import { layer } from './js/layer';
// import { carousel } from './js/carousel';
// import { pagination } from './js/pagination';

window.addEventListener('load', (event) => {
  const url = window.location.pathname.includes('gifts')
    ? '../data/gifts.json'
    : './src/data/gifts.json';

  const getData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  };

  getData(url).then((data) => {
    loadPage(data);
  });
});

const loadPage = function (data) {
  loader.removeLoader();
  burger.menu.addEventListener('click', burger.openBurgerMenu);
  burger.nav.addEventListener('click', (e) => burger.link(e));
  if (window.location.pathname === '/christmas-shop/src/pages/gifts.html') {
    // window.addEventListener('scroll', pageup.showPageUpIco);
  } else {
    // window.addEventListener('resize', slider.sliderResize);
    // slider.sliderBtns.addEventListener('click', slider.sliderClick);
    // timer.startTimer();
  }
  // spa.spa();
  // slider.sliderBtns.addEventListener('click', (e) => slider.sliderClick(e));
  //   const page = window.location.pathname.split('/').pop();
  //   window.addEventListener('scroll', pageup.showPageUpIco);
  //   layer.layer.addEventListener('click', burger.openBurgerMenu);
  //   document.addEventListener('keyup', (e) => {
  //     if (e.key === 'Escape') {
  //       burger.openBurgerMenu();
  //     }
  //   });
  //   if (page === 'index.html') {
  //     carousel.fillFrameClip(data);
  //     carousel.addCarouselEvents(data);
  //     carousel.mouseScreen();
  //     carousel.touchScreen();
  //   } else {
  //     pagination.getDataForPagination(data);
  //     pagination.cardsNumber = pagination.getNumberOfCardsPerPage();
  //     pagination.getQueueForPagination();
  //     pagination.createCardList();
  //     pagination.addPaginationEvents();
  //   }
};

console.log(`
Total score: 100 points

The layout of the pages aligns the design at a screen width of 1440px: +16
  <header> on each page: +2
  Hero section on Home page: +2
  About section on Home page: +2
  Slider section on Home page: +2
  Best Gifts section on Home page: +2
  CTA section on Home page: +2
  Gifts section on Gifts page: +2
  <footer> on each page: +2

The layout of the pages aligns the design at a screen width of 768px: +16
  <header> on each page: +2
  Hero section on Home page: +2
  About section on Home page: +2
  Slider section on Home page: +2
  Best Gifts section on Home page: +2
  CTA section on Home page: +2
  Gifts section on Gifts page: +2
  <footer> on each page: +2

The layout of the pages aligns the design at a screen width of 380px: +16
  <header> on each page: +2
  Hero section on Home page: +2
  About section on Home page: +2
  Slider section on Home page: +2
  Best Gifts section on Home page: +2
  CTA section on Home page: +2
  Gifts section on Gifts page: +2
  <footer> on each page: +2

There is no horizontal scrollbar at all screen width up to 380px inclusive. All page content remains as per the design: it is not cropped, removed, or shifted to the side: +24
  Home page: no horizontal scroll bar between 1440px and 768px widths: +6
  Home page: no horizontal scroll bar between 768px and 380px widths: +6
  Gifts page: no horizontal scroll bar between 1440px and 768px widths: +6
  Gifts page: no horizontal scroll bar between 768px and 380px widths: +6

During smooth resizing of the browser window from 1440px to 380px, the layout occupies the full width of the window (including specified margins), elements adjust their sizes and positions appropriately without full scaling, no elements overlap, and images maintain their correct aspect ratios: +8
  On Home page: +4
  On Gifts page: +4

At screen widths of 768px, the menu and navigation links in <header> are concealed on both pages, and a burger menu icon is displayed: +4
(Note: Activation of the burger menu icon is not evaluated at this stage.)

Hover effects are active on desktop devices (as per the Desktop device type in DevTools) and are disabled for mobile devices (as per the Mobile device type in DevTools) on both pages: +4

The layout for both pages is validated and error-free according to the W3C Validator (https://validator.w3.org/): +12
`);
