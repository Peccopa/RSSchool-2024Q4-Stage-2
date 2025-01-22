import { PageElement } from '../constructors/PageElement.js';

export const createTextDisplay = (parent = null) => {
  return new PageElement({
    tag: 'h1',
    text: 'SIMON SAYS GAME',
    classes: ['text-display'],
    parent: parent,
  });
};
