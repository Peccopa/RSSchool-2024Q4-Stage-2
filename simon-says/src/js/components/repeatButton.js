import { PageElement } from '../constructors/PageElement.js';

export const createRepeatButton = (parent = null) => {
  return new PageElement({
    tag: 'button',
    text: 'Repeat sequence',
    classes: ['repeat-button', 'button', 'inactive-btn'],
    attribute: ['type', 'button'],
    parent: parent,
  });
};
