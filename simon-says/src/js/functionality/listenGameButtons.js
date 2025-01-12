import { components } from '../components.js';
import { state } from '../script.js';
import { checkPlayerAction, nextRound } from './awaitPlayerActions.js';
import { changeDiffLevel } from './changeDiffLevel.js';
import { selectNewGame } from './selectNewGame.js';
import { addBlockKeys, startNewGame } from './startNewGame.js';
import { playSequence, startNewSequence } from './startNewSequence.js';

export const listenGameButtons = function (e) {
  if (e.target === components.gamelevels.levelEasy) {
    changeDiffLevel(e.target, state, components);
  }
  if (e.target === components.gamelevels.levelMedium) {
    changeDiffLevel(e.target, state, components);
  }
  if (e.target === components.gamelevels.levelHard) {
    changeDiffLevel(e.target, state, components);
  }
  if (e.target === components.startButton) {
    startNewGame(state, components);
    startNewSequence(state, components);
  }
  if (e.target === components.repeatButton) {
    if (e.target.textContent === 'Next') {
      nextRound(state, components);
    } else {
      state.attemptСounter += 1;
      e.target.classList.add('inactive-btn');
      components.repeatButton.classList.remove('blinked-btn');
      addBlockKeys(components.gameKeys.allKeys);
      playSequence(state, components);
    }
  }
  if (e.target === components.newButton) {
    selectNewGame(state, components);
  }
  if (e.target.classList.contains('key')) {
    if (components.textDisplay.textContent === 'TRY TO REPEAT')
      components.textDisplay.textContent = '';
    checkPlayerAction(e);
  }
};
