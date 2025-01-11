import { PageElement } from '../constructors/PageElement.js';
import { data } from '../data/data.js';

export const createGameKeys = (parent) => {
  function getKeys(arr, parent) {
    return arr.reduce((obj, value) => {
      const keyName = `key${value}`;
      const element = new PageElement({
        tag: 'button',
        text: `${value}`,
        classes: ['key', keyName, 'blocked-key'],
        attribute: ['type', 'button'],
        parent: parent,
      });
      obj[keyName] = element;
      return obj;
    }, {});
  }

  const keyNumPad = new PageElement({
    classes: ['key-num-pad'],
    parent: parent,
  });

  const keyLettPad = new PageElement({
    classes: ['key-lett-pad', 'inactive-key'],
    parent: parent,
  });

  const keyLine1 = new PageElement({
    classes: ['key-line-1'],
    parent: keyLettPad,
  });

  const keyLine2 = new PageElement({
    classes: ['key-line-2'],
    parent: keyLettPad,
  });

  const keyLine3 = new PageElement({
    classes: ['key-line-3'],
    parent: keyLettPad,
  });

  const numberKeys = getKeys(data.numbers, keyNumPad);
  const letterKeys1 = getKeys(data.letters.slice(0, 10), keyLine1);
  const letterKeys2 = getKeys(data.letters.slice(10, 19), keyLine2);
  const letterKeys3 = getKeys(data.letters.slice(19), keyLine3);
  const letterKeys = Object.assign({}, letterKeys1, letterKeys2, letterKeys3);

  return {
    keyNumPad,
    keyLettPad,
    keyLine1,
    keyLine2,
    keyLine3,
    numberKeys,
    letterKeys,
  };
};
