export class Cards {
  constructor({ name, category }) {
    (this.name = name), (this.category = category);
  }

  getCategoryInOneWord() {
    return this.category
      .substring(this.category.lastIndexOf(' ') + 1, this.category.length)
      .toLowerCase();
  }

  getImagePath() {
    return window.location.pathname.split('/').length > 3
      ? '../img/gifts/gift-for-'
      : './src/img/gifts/gift-for-';
  }
  // ../img/gifts/gift-for-harmony.png
  // ./src/img/gifts/gift-for-harmony.png
  getColor(category) {
    const colors = {
      work: 'purple',
      health: 'green',
      harmony: 'pink',
    };
    return colors[category];
  }

  generateCard(parent, position = 'before') {
    const categoryWord = this.getCategoryInOneWord();

    const card = document.createElement('div');
    card.className = 'gift-card';

    const img = document.createElement('div');
    img.className = 'gift-card__img';
    img.style.backgroundImage = `url(${this.getImagePath()}${categoryWord}.png)`;
    // img.setAttribute(`src`, `${this.getImagePath()}${categoryWord}.png`);
    // img.setAttribute(`alt`, `Gift - ${this.name}`);
    card.append(img);

    // const img = document.createElement('img');
    // img.className = 'gift-card__img';
    // img.setAttribute(`src`, `${this.getImagePath()}${categoryWord}.png`);
    // img.setAttribute(`alt`, `Gift - ${this.name}`);
    // card.append(img);

    const descr = document.createElement('div');
    descr.className = 'gift-card__descr';
    card.append(descr);

    const descrH4 = document.createElement('h4');
    descrH4.classList = `gift-card__h4 ${this.getColor(categoryWord)}`;
    descrH4.textContent = `${this.category}`;
    descr.append(descrH4);

    const descrH3 = document.createElement('h4');
    descrH3.className = 'gift-card__h3';
    descrH3.textContent = `${this.name}`;
    descr.append(descrH3);

    parent.append(card);
  }
}

// <div class="gift-card">
// <img
//   class="gift-card__img"
//   src="./src/img/gifts/gift-for-work.png"
//   alt="Gift card"
// />
// <div class="gift-card__descr">
//   <h4 class="gift-card__h4 purple">For work</h4>
//   <h3 class="gift-card__h3">Console.log Guru</h3>
// </div>
// </div>
