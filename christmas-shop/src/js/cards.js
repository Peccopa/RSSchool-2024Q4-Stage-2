export class Cards {
  constructor({ name, category }) {
    this.name = name;
    this.category = category;
  }

  getCategoryInOneWord() {
    return this.category
      .substring(this.category.lastIndexOf(' ') + 1, this.category.length)
      .toLowerCase();
  }

  getImagePath() {
    return window.location.pathname.split('/').length > 4
      ? '../img/'
      : './src/img/';
  }

  getColor(category) {
    const colors = {
      work: 'purple',
      health: 'green',
      harmony: 'pink',
    };
    return colors[category];
  }

  generateCard(parent) {
    const categoryWord = this.getCategoryInOneWord();
    const card = document.createElement('div');
    card.className = 'gift-card';
    const img = document.createElement('div');
    img.className = 'gift-card__img';
    img.style.backgroundImage = `url(${this.getImagePath()}gifts/gift-for-${categoryWord}.png)`;
    card.append(img);

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
    return card;
  }
}
