import { data } from '../data/data.js';
import { awaitPlayerActions } from './awaitPlayerActions.js';
import {
  blockGameKeysAndButtons,
  unblockGameKeysAndButtons,
} from './startNewGame.js';

export const startNewSequence = function (state, components) {
  if (state.diffLevel === 'easy') state.dataArray = data.numbers;
  if (state.diffLevel === 'medium') state.dataArray = data.letters;
  if (state.diffLevel === 'hard')
    state.dataArray = data.numbers.concat(data.letters);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createNewSequence(length) {
    const newSequence = Array.from(length);
    return newSequence.map((e) => {
      const num = getRandomNumber(0, state.dataArray.length - 1);
      e = num;
      return e;
    });
  }
  state.currentSequence = createNewSequence({ length: state.roundLevel * 2 });
  playSequence(state, components);
  state.gameStatus = 'await';
};

export const playSequence = function (state, components) {
  blockGameKeysAndButtons(state, components);
  components.textDisplay.textContent = 'Try to remember';
  let showSequence = '';
  let timer = 1000;
  let count = state.currentSequence.length;
  const allKeys = Object.assign(
    {},
    components.gameKeys.numberKeys,
    components.gameKeys.letterKeys
  );
  state.currentSequence.forEach((e) => {
    const key = state.dataArray[e];

    showSequence += key;
    setTimeout(() => {
      allKeys[`key${key}`].classList.add('lighted-key');
    }, timer);
    timer += 1500;
    setTimeout(() => {
      allKeys[`key${key}`].classList.remove('lighted-key');
      count -= 1;
      if (count === 0) {
        setTimeout(() => {
          unblockGameKeysAndButtons(state, components);
          awaitPlayerActions(state, components);
          console.log(`Current sequence is "${showSequence}"`);
        }, 500);
      }
    }, timer - 500);
  });
};
