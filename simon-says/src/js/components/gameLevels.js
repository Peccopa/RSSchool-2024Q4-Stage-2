import { PageElement } from '../constructors/PageElement.js';

export const createGameLevels = (parent) => {
  const gameLevels = new PageElement({
    classes: ['game-levels'],
    parent: parent,
  });

  const levelEasy = new PageElement({
    tag: 'button',
    text: 'Easy',
    classes: ['level-easy', 'button', 'selected-btn'],
    attribute: ['type', 'button'],
    parent: gameLevels,
  });

  const levelMedium = new PageElement({
    tag: 'button',
    text: 'Medium',
    classes: ['level-medium', 'button'],
    attribute: ['type', 'button'],
    parent: gameLevels,
  });

  const levelHard = new PageElement({
    tag: 'button',
    text: 'Hard',
    classes: ['level-hard', 'button'],
    attribute: ['type', 'button'],
    parent: gameLevels,
  });

  return {
    gameLevels,
    levelEasy,
    levelMedium,
    levelHard,
  };
};
