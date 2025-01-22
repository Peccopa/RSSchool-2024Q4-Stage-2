import {
  toggleBlockButton,
  addBlockKeys,
  removeBlockKeys,
  startNewGame,
} from './startNewGame.js';
import { components } from '../components.js';
import { state } from '../script.js';
import { startNewSequence } from './startNewSequence.js';

export const awaitPlayerActions = function (state, components) {
  components.textDisplay.textContent = 'TRY TO REPEAT';
};

export const checkPlayerAction = function (element, device = 'mouse') {
  if (components.textDisplay.textContent === 'TRY TO REPEAT')
    components.textDisplay.textContent = '';
  let target;
  if (device === 'keyboard')
    target = components.gameKeys.allKeys[`key${element.key.toUpperCase()}`];
  if (device === 'mouse') target = element.target;
  if (target.textContent === state.gameStack[0]) {
    // target.classList.add('lighted-key');
    components.textDisplay.textContent += `${target.textContent}`;
    toggleBlockButton(components.newButton);
    toggleBlockButton(components.repeatButton);
    addBlockKeys(components.gameKeys.allKeys);
    state.gameStack.shift();
    setTimeout(() => {
      // target.classList.remove('lighted-key');
      if (state.gameStack.length === 0) {
        components.textDisplay.textContent = `EXCELLENT!`;
        toggleBlockButton(components.newButton);
        toggleBlockButton(components.repeatButton);
        if (state.roundLevel !== 5) {
          components.repeatButton.classList.add('blinked-btn');
          components.repeatButton.classList.remove('inactive-btn');
          components.repeatButton.textContent = 'Next';
        } else {
          components.gameRounds.gameRounds.classList.add('inactive-rounds');
          components.newButton.classList.add('blinked-btn');
          components.gameBoard.display.classList.add('inactive-display');
          components.repeatButton.classList.add('inactive-btn');
          addBlockKeys(components.gameKeys.allKeys);
          state.gameStatus = 'endgame';
          setTimeout(() => {
            components.textDisplay.textContent = `GAME OVER!`;
          }, 2000);
        }
      } else {
        toggleBlockButton(components.newButton);
        toggleBlockButton(components.repeatButton);
        removeBlockKeys(components.gameKeys.allKeys);
      }
    }, 500);
  } else {
    if (state.attemptСounter === 0) {
      components.textDisplay.textContent = 'WRONG! TRY AGAIN';
      components.repeatButton.classList.add('blinked-btn');
      addBlockKeys(components.gameKeys.allKeys);
    } else {
      components.textDisplay.textContent = `WRONG!`;
      components.gameRounds.gameRounds.classList.add('inactive-rounds');
      components.newButton.classList.add('blinked-btn');
      components.gameBoard.display.classList.add('inactive-display');
      addBlockKeys(components.gameKeys.allKeys);
      state.gameStatus = 'endgame';
    }
  }
};

export const nextRound = function (state, components) {
  state.roundLevel += 1;
  state.currentSequence = [];
  state.gameStatus = 'menu';
  state.dataArray = [];
  state.gameStack = [];
  state.attemptСounter = 0;

  components.repeatButton.classList.remove('blinked-btn');
  components.repeatButton.textContent = 'Repeat sequence';
  components.gameRounds.roundsCount.textContent = state.roundLevel;

  startNewGame(state, components);
  startNewSequence(state, components);
};
