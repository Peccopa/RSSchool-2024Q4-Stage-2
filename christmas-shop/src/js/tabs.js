import { timer } from './timer';
import { Cards } from './cards.js';

export const tabs = {
  parent: document.querySelector('.gifts__cards'),
  tabs: document.querySelector('.tabs'),
  data: {},

  changeSelectedTab(e) {
    document
      .querySelectorAll('.tab')
      .forEach((e) => e.classList.remove('tab_selected'));
    e.target.classList.add('tab_selected');
  },

  getTabCategoryArray(e) {
    const category = e.target.innerText.replace('FOR ', '').toLowerCase();
    return tabs.data.filter(
      (e) => e.category.replace('For ', '').toLowerCase() === category
    );
  },

  clickOnTabs(e) {
    if (e.target.classList.contains('tab')) {
      tabs.changeSelectedTab(e);
      let cards = document.querySelectorAll('.gift-card');
      cards.forEach((card) => {
        card.classList.add('gift-card_anim');
      });
      setTimeout(() => {
        if (e.target.innerText === 'ALL') {
          tabs.generateGiftsCardsBlock(tabs.data);
        } else {
          const tabCategoryArray = tabs.getTabCategoryArray(e);
          tabs.generateGiftsCardsBlock(tabCategoryArray);
        }
        cards = document.querySelectorAll('.gift-card');
        let timeout = 100;
        cards.forEach((card) => {
          card.classList.add('gift-card_anim');
          setTimeout(() => {
            card.classList.remove('gift-card_anim');
          }, timeout);
          timeout += 100;
        });
      }, 300);

      // console.log(tabCategory);
      // console.log(tabs.data);
      // console.log(data.getData('../data/gifts.json'));

      // console.log(card.innerText.split('\n')[0]);

      // card.classList.remove('gift-card_anim');
      // setTimeout(() => {
      //   card.classList.remove('gift-card_none');
      //   if (
      //     card.innerText.split('\n')[0] !== e.target.innerText &&
      //     e.target.innerText !== 'ALL'
      //   ) {
      //     card.classList.add('gift-card_none');
      //   } else {
      //     setTimeout(() => {
      //       card.classList.remove('gift-card_anim');
      //     }, timeout);
      //     timeout += 100;
      //   }
      // }, 300);
      // });
    }
  },

  generateGiftsCardsBlock(data) {
    tabs.parent.innerHTML = '';
    const cardsArray = timer.gеtArrayOfRandomNumbers(12, data);
    cardsArray.forEach((e) => {
      const card = new Cards(data[e]);
      card.generateCard(tabs.parent);
    });
  },

  // clickOnTabs(e) {
  //   if (e.target.classList.contains('tab')) {
  //     document
  //       .querySelectorAll('.tab')
  //       .forEach((e) => e.classList.remove('tab_selected'));
  //     e.target.classList.add('tab_selected');
  //     const cards = document.querySelectorAll('.gift-card');
  //     let timeout = 0;
  //     cards.forEach((card) => {
  //       card.classList.remove('gift-card_anim');
  //       card.classList.add('gift-card_anim');
  //       setTimeout(() => {
  //         card.classList.remove('gift-card_none');
  //         if (
  //           card.innerText.split('\n')[0] !== e.target.innerText &&
  //           e.target.innerText !== 'ALL'
  //         ) {
  //           card.classList.add('gift-card_none');
  //         } else {
  //           setTimeout(() => {
  //             card.classList.remove('gift-card_anim');
  //           }, timeout);
  //           timeout += 100;
  //         }
  //       }, 300);
  //     });
  //   }
  // },
};
