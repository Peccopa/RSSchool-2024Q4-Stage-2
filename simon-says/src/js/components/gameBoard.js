import { PageElement } from '../constructors/PageElement.js';

export const createGameBoard = (parent) => {
  const game = new PageElement({
    classes: ['gameboard'],
    parent: parent,
  });

  const menu = new PageElement({
    classes: ['menu'],
    parent: game,
  });

  const menuBtns = new PageElement({
    classes: ['menu-btns'],
    parent: menu,
  });

  const display = new PageElement({
    classes: ['display', 'inactive-display'],
    parent: game,
  });

  const keyboard = new PageElement({
    classes: ['keyboard'],
    parent: game,
  });

  const start = new PageElement({
    classes: ['start'],
    parent: game,
  });

  return {
    game,
    menu,
    menuBtns,
    display,
    keyboard,
    start,
  };
};
