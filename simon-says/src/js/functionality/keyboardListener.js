import { components } from '../components.js';
import { state } from '../script.js';
import { checkPlayerAction } from './awaitPlayerActions.js';

export const keyboardListener = function (element) {
  if (state.dataArray.includes(element.key.toUpperCase()))
    checkPlayerAction(element, 'keyboard');
};
