export const tabs = {
  tabs: document.querySelector('.tabs'),

  clickOnTabs(e) {
    if (e.target.classList.contains('tab')) {
      document
        .querySelectorAll('.tab')
        .forEach((e) => e.classList.remove('tab_selected'));
      e.target.classList.add('tab_selected');

      const cards = document.querySelectorAll('.gift-card');
      // let count = 0;
      // count += 50;
      cards.forEach((card) => {
        card.classList.remove('gift-card_anim');
        // card.classList.remove('gift-card_anim-end');
        card.classList.add('gift-card_anim');
        setTimeout(() => {
          card.classList.remove('gift-card_none');
          if (
            card.innerText.split('\n')[0] !== e.target.innerText &&
            e.target.innerText !== 'ALL'
          ) {
            card.classList.add('gift-card_none');
          }
          card.classList.remove('gift-card_anim');
        }, 300);
      });
    }
  },
};
