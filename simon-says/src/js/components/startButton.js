import { PageElement } from '../constructors/PageElement.js';

export const createStartButton = (parent = null) => {
  return new PageElement({
    tag: 'button',
    text: 'Start',
    classes: ['start-button', 'button', 'blinked-btn'],
    attribute: ['type', 'button'],
    parent: parent,
  });
};
