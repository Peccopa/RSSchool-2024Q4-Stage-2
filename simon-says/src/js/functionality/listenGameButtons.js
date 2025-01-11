import { components } from '../components.js';
import { state } from '../script.js';
import { changeDiffLevel } from './changeDiffLevel.js';
import { startNewGame } from './startNewGame.js';
import { startNewSequence } from './startNewSequence.js';

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
    setTimeout(() => {
      startNewSequence(state, components);
    }, 1000);
  }
};
