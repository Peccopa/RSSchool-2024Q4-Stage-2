import { toggleBlockButton, addBlockKeys, removeBlockKeys } from './startNewGame.js';
import { components } from '../components.js';
import { state } from '../script.js';

export const awaitPlayerActions = function (state, components) {
  components.textDisplay.textContent = 'TRY TO REPEAT';
  console.log(state, components);
};

export const checkPlayerAction = function (element) {
  if (element.target.textContent === state.gameStack[0]) {
    element.target.classList.add('lighted-key');
    components.textDisplay.textContent += `${element.target.textContent}`;
    toggleBlockButton(components.newButton);
    toggleBlockButton(components.repeatButton);
    addBlockKeys(components.gameKeys.allKeys);
    state.gameStack.shift();
    setTimeout(() => {
      element.target.classList.remove('lighted-key');
      if (state.gameStack.length === 0) {
        components.textDisplay.textContent = `You did it!`;
        toggleBlockButton(components.newButton);
        toggleBlockButton(components.repeatButton);
      } else {
        toggleBlockButton(components.newButton);
        toggleBlockButton(components.repeatButton);
        removeBlockKeys(components.gameKeys.allKeys);
        console.log(true);
      }
    }, 750);
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

export const checkGameConditions = function (state, components) {};
