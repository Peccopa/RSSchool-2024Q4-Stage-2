import { data } from '../data/data.js';
import { awaitPlayerActions } from './awaitPlayerActions.js';
import {
  addBlockKeys,
  removeBlockKeys,
  toggleBlockButton,
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
      return (e = getRandomNumber(0, state.dataArray.length - 1));
    });
  }

  state.currentSequence = createNewSequence({ length: state.roundLevel * 2 });
  playSequence(state, components);
  state.gameStatus = 'await';
};

export const playSequence = function (state, components) {
  addBlockKeys(components.gameKeys.allKeys);
  toggleBlockButton(components.newButton);
  toggleBlockButton(components.repeatButton);
  state.gameStack = [];
  components.textDisplay.textContent = 'TRY TO REMEMBER';
  let timer = 1000;
  let count = state.currentSequence.length;
  state.currentSequence.forEach((e) => {
    const key = String(state.dataArray[e]);
    if (state.gameStack.length < state.currentSequence.length)
      state.gameStack.push(key);
    setTimeout(() => {
      components.gameKeys.allKeys[`key${key}`].classList.add('lighted-key');
    }, timer);
    timer += 1500;
    setTimeout(() => {
      components.gameKeys.allKeys[`key${key}`].classList.remove('lighted-key');
      count -= 1;
      if (count === 0) {
        setTimeout(() => {
          removeBlockKeys(components.gameKeys.allKeys);
          toggleBlockButton(components.newButton);
          toggleBlockButton(components.repeatButton);
          awaitPlayerActions(state, components);
          console.log(`Current sequence is "${state.gameStack}"`);
        }, 500);
      }
    }, timer - 500);
  });
};
