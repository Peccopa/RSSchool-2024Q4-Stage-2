import { data } from '../data/data.js';
import { awaitPlayerActions } from './awaitPlayerActions.js';

export const startNewSequence = function (state, components) {
  let dataArray;
  if (state.diffLevel === 'easy') dataArray = data.numbers;
  if (state.diffLevel === 'medium') dataArray = data.letters;
  if (state.diffLevel === 'hard') dataArray = data.numbers.concat(data.letters);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createNewSequence(length) {
    const newSequence = Array.from(length);
    return newSequence.map(
      (e) => (e = getRandomNumber(0, dataArray.length - 1))
    );
  }

  function playSequence(sequence) {
    let timer = 1000;
    let count = sequence.length;
    const allKeys = Object.assign(
      {},
      components.gameKeys.numberKeys,
      components.gameKeys.letterKeys
    );
    sequence.forEach((e) => {
      const key = dataArray[e];
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
            awaitPlayerActions(state, components);
          }, 500);
        }
      }, timer - 500);
    });
  }

  let showSequence = '';
  state.currentSequence = createNewSequence({ length: state.roundLevel * 2 });
  playSequence(state.currentSequence);
  console.log(`Current sequence is "${showSequence}"`);
};
