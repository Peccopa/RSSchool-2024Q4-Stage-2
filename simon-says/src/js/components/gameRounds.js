import { PageElement } from '../constructors/PageElement.js';

export const createGameRounds = (parent) => {
  const gameRounds = new PageElement({
    classes: ['game-rounds', 'inactive-rounds'],
    parent: parent,
  });

  const roundsText = new PageElement({
    tag: 'span',
    text: 'Round:',
    classes: ['rounds-text'],
    parent: gameRounds,
  });

  const roundsCount = new PageElement({
    tag: 'span',
    text: '1',
    classes: ['rounds-count'],
    parent: gameRounds,
  });

  return {
    gameRounds,
    roundsText,
    roundsCount,
  };
};
