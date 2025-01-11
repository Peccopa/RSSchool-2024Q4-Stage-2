import { components } from '../components.js';
import { state } from '../script.js';
import { changeDiffLevel } from './changeDiffLevel.js';
import { selectNewGame } from './selectNewGame.js';
import { startNewGame } from './startNewGame.js';
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
    e.target.classList.add('inactive-btn');
    playSequence(state, components);
  }
  if (e.target === components.newButton) {
    selectNewGame(state, components);
  }
};
