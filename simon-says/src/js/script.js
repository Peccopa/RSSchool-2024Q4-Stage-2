import { components } from './components.js';
import { listenGameButtons } from './functionality/listenGameButtons.js';

components.gameBoard.game.addEventListener('click', listenGameButtons);

export const state = {
  diffLevel: 'easy',
  roundLevel: '1',
  gameStatus: 'menu',
  currentSequence: '',
};
