import { PageElement } from '../constructors/PageElement.js';

export const createTextDisplay = (parent = null) => {
  return new PageElement({
    tag: 'h1',
    text: 'Simon Says',
    classes: ['text-display'],
    parent: parent,
  });
};
