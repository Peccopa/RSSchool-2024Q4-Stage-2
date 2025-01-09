import { PageElement } from '../constructors/PageElement.js';

export const createGameBoard = (parent) => {
  const page = new PageElement({
    classes: ['page'],
    parent: parent,
  });

  const menu = new PageElement({
    classes: ['menu'],
    parent: page,
  });

  const display = new PageElement({
    classes: ['display'],
    parent: page,
  });

  const keyboard = new PageElement({
    classes: ['keyboard'],
    parent: page,
  });

  const start = new PageElement({
    classes: ['start'],
    parent: page,
  });

  return {
    page,
    menu,
    display,
    keyboard,
    start,
  };
};
