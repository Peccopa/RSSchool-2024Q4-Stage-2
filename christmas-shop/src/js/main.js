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
Total score: 110 points

Checking validation of pages: +18
  The layout for both pages is validated and error-free according to the W3C Validator (https://validator.w3.org/): +12 (6 points per page)
  Valid markup of checked page corresponds to the message "Document checking completed. No errors or warnings to show." In this case, we assign the full points for the checked page (+6).
  If there are warnings but no errors, we assign half of the points (+3) for the checked page
  Favicon is added to each page: +2
  Only one <h1> per each page: +2
  The URL of the Gifts page differs from the URL of the Home page (e.g. your-site.com for the Home page and your-site.com/gifts for the Gifts page): +2

The layout matches the design: +46
  <header> on each page: +4
  Hero section on Home page: +6
  About section on Home page: +6
  Slider section on Home page: +6
  Best Gifts section on Home page: +6
  CTA section on Home page: +6
  Gifts section on Gifts page: +6
  <footer> on each page: +6

CSS Requirements: +10
  For positioning gifts in Best Gifts section on Home page and gifts in Gifts section on Gifts page used Flexbox or Grid Layout: +4
  When scaling the browser page (<100%) or increasing the page width (>1440px), the layout of both pages is centered rather than shifted to the side and not stretched across the entire width: +4
  The empty spaces around the layout are filled with white color: +2

Interactivity: +36
  Navigation elements (except CONTACTS) lead to corresponding sections on Home page: +4
  CONTACTS in navigation panel links to the <footer> on its own page: +2
  Smooth scrolling with anchor links: +2
  When clicking on the GIFTS link in <header> and Explore Magical Gifts button in Hero and CTA sections on Home page, it navigates to the Gifts page: +2
  The GIFTS link in <header> on Gifts page is non-interactive and don't have a hover effects: +2
  When clicking on the Logo in <header>, it navigates to the Home page: +2
  The active ALL tab in Gifts section of Gifts page is non-interactive and don't have a hover effects: +2
  Each Gift-card in the Gifts section of the Gifts page, Best Gifts section on Home page and cards in <footer> is interactive when hovering over any area of the card: +6
  In the <footer>, clicking on the card CALL US should initiate a phone call: +2
  In the <footer>, clicking on the card WRITE US should open the mail client: +2
  In the <footer>, clicking on the card MAGIC FOREST should open a new browser tab with Google Maps displaying any location of your choice: +2
  In the <footer>, clicking on the link Made in Rolling Scopes School should open the school's website in a new tab: +2
  Interactivity of the links and buttons is implemented according to the Figma layout. Interactivity includes not only changing cursor's appearance, for example, using the cursor: pointer property, but also the use of other visual effects, such as changing the background color or font color, following the Styleguide in the Figma layout. If the interactivity is not specified in the Styleguide, cursor: pointer property is enough: +4
  Mandatory requirement for interactivity: smooth change in the appearance of an element on hover, without affecting adjacent elements: +2
  `);
