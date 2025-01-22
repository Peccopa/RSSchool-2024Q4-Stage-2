import { Cards } from './cards';

export class Modal extends Cards {
  constructor({
    name,
    category,
    description,
    superpowers: { live, create, love, dream },
  }) {
    super(name, category);
    this.name = name;
    this.category = category;
    this.description = description;
    this.live = live;
    this.create = create;
    this.love = love;
    this.live = live;
    this.dream = dream;
  }

  generateModal(parent, position = 'before') {
    const modal = this.generateCard(parent, position);
    modal.classList.add('modal');

    const cross = document.createElement('div');
    cross.className = 'modal__cross';
    modal.append(cross);

    const crossLineOne = document.createElement('div');
    crossLineOne.className = 'modal__cross-line';
    cross.append(crossLineOne);

    const crossLineTwo = document.createElement('div');
    crossLineTwo.className = 'modal__cross-line';
    cross.append(crossLineTwo);

    const modalDescriptionBlock = modal.querySelector('.gift-card__descr');
    const description = document.createElement('p');
    description.className = 'modal__descr';
    description.textContent = this.description;
    modalDescriptionBlock.append(description);

    const modalStats = document.createElement('div');
    modalStats.className = 'modal__stats';
    modalDescriptionBlock.append(modalStats);

    const statsHeader = document.createElement('h4');
    statsHeader.classList = 'stats__header';
    statsHeader.textContent = 'Adds superpowers to:'.toUpperCase();
    modalStats.append(statsHeader);

    const statArr = ['live', 'create', 'love', 'dream'];
    statArr.forEach((e) => {
      const stat = document.createElement('div');
      stat.classList = 'stat';
      modalStats.append(stat);
      const statName = document.createElement('p');
      statName.classList = 'stat__name';
      statName.textContent = e;
      stat.append(statName);
      const statPointsBlock = document.createElement('div');
      statPointsBlock.classList = 'stat__points-block';
      stat.append(statPointsBlock);
      const statPoints = document.createElement('p');
      statPoints.classList = 'stat__points';
      statPoints.textContent = this[e];
      statPointsBlock.append(statPoints);
      const statStarsBlock = document.createElement('div');
      statStarsBlock.classList = 'stat__stars-block';
      statPointsBlock.append(statStarsBlock);

      let score = parseInt(this[e]) / 100;
      for (let i = 0; i < 5; i += 1) {
        const statStar = document.createElement('div');
        statStar.className = 'stat__star';
        if (score <= 0) statStar.style.opacity = '0.1';
        score -= 1;
        statStarsBlock.append(statStar);
      }
      setTimeout(() => {
        modal.classList.add('show-modal');
      }, 0);
    });
  }
}
