import { components } from '../components.js';
import { state } from '../script.js';
import { checkPlayerAction } from './awaitPlayerActions.js';

export const keyboardKeyUp = function (element) {
  if (state.dataArray.includes(element.key.toUpperCase())) {
    checkPlayerAction(element, 'keyboard');
    const target =
      components.gameKeys.allKeys[`key${element.key.toUpperCase()}`];
    target.classList.remove('lighted-key');
  }
};

export const keyboardKeyDown = function (element) {
  if (state.dataArray.includes(element.key.toUpperCase())) {
    const target =
      components.gameKeys.allKeys[`key${element.key.toUpperCase()}`];
    target.classList.add('lighted-key');
  }
};

export const mouseKeyDown = function (element) {
  if (state.dataArray.includes(element.target.textContent)) {
    element.target.classList.add('lighted-key');
  }
};

export const mouseKeyUp = function (element) {
  if (state.dataArray.includes(element.target.textContent)) {
    setTimeout(() => {
      element.target.classList.remove('lighted-key');
    }, 500);
  }
};
