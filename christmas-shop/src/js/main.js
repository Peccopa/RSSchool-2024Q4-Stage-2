'use strict';

import { data } from './data.js';
import { loader } from './loader.js';
import { links } from './links.js';
import { burger } from './burger.js';
import { slider } from './slider.js';
import { timer } from './timer.js';
import { pageup } from './pageup.js';
import { scroll } from './scroll.js';
import { tabs } from './tabs.js';
import { Cards } from './cards.js';
// import { layer } from './js/layer';
// import { carousel } from './js/carousel';
// import { pagination } from './js/pagination';

window.addEventListener('load', (event) => {
  const url = window.location.pathname.includes('gifts')
    ? '../data/gifts.json'
    : './src/data/gifts.json';

  data.getData(url).then((data) => {
    loadPage(data);
  });
});

const loadPage = function (data) {
  tabs.data = data;
  loader.removeLoader();
  window.addEventListener('click', links.checkClick);
  burger.menu.addEventListener('click', burger.openBurgerMenu);
  // burger.nav.addEventListener('click', (e) => burger.link(e));
  if (window.location.pathname === '/christmas-shop/src/pages/gifts.html') {
    if (data) {
      tabs.generateGiftsCardsBlock(data);
    }
    window.addEventListener('scroll', pageup.showPageUpIco);
    tabs.tabs.addEventListener('click', tabs.clickOnTabs);
  } else {
    if (data) {
      const parent = document.querySelector('.best__cards');
      parent.innerHTML = '';
      const cardsArray = timer.gеtArrayOfRandomNumbers(4, data);
      cardsArray.forEach((e) => {
        const card = new Cards(data[e]);
        card.generateCard(parent);
      });
    }

    window.addEventListener('resize', slider.sliderResize);
    // slider.sliderBtns.addEventListener('click', slider.sliderClick);
    slider.sliderBtns.addEventListener('click', slider.sliderClickTrash);
    timer.startTimer();

    // document.body.append(testCard);
    // console.log(testCard.generateCard());
  }
  // const testCard = new Cards(data[0]);
  // testCard.generateCard();

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
`);
