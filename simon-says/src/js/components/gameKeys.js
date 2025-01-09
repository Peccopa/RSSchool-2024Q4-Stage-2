import { PageElement } from '../constructors/PageElement.js';
import { data } from '../data/data.js';

export const createGameKeys = (parent) => {
  function getKeys(arr, parent) {
    return arr.reduce((obj, value) => {
      const keyName = `key${value}`;
      const element = new PageElement({
        tag: 'button',
        text: `${value}`,
        classes: ['key', keyName],
        attribute: ['type', 'button'],
        parent: parent,
      });
      obj[keyName] = element;
      return obj;
    }, {});
  }

  const keyNumberPad = new PageElement({
    classes: ['key-number-pad'],
    parent: parent,
  });

  const keyLetterPad = new PageElement({
    classes: ['key-letter-pad'],
    parent: parent,
  });

  const numberKeys = getKeys(data.numbers, keyNumberPad);
  const letterKeys = getKeys(data.letters, keyLetterPad);

  return {
    keyNumberPad,
    keyLetterPad,
    numberKeys,
    letterKeys,
  };
};
