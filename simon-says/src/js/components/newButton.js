import { PageElement } from '../constructors/PageElement.js';

export const createNewButton = (parent = null) => {
  return new PageElement({
    tag: 'button',
    text: 'New Game',
    classes: ['new-button', 'button', 'inactive-btn'],
    attribute: ['type', 'button'],
    parent: parent,
  });
};
