'use strict';

import { loader } from './_loader.js';
import { burger } from './_burger.js';
import { slider } from './_slider.js';
import { timer } from './_timer.js';
import { pageup } from './_pageup.js';
import { scroll } from './_scroll.js';
// import { cards} from './_cards.js';
// import { layer } from './js/_layer';
// import { carousel } from './js/_carousel';
// import { pagination } from './js/_pagination';

window.addEventListener('load', (event) => {
  const url =
    window.location.pathname === '/christmas-shop/src/pages/gifts.html'
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
  window.addEventListener('resize', slider.sliderResize);
  if (window.location.pathname === '/christmas-shop/src/pages/gifts.html') {
    window.addEventListener('scroll', pageup.showPageUpIco);
  } else {
    slider.sliderBtns.addEventListener('click', slider.sliderClick);
    timer.startTimer();
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
