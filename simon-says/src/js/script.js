import { components } from './components.js';
import { listenGameButtons } from './functionality/listenGameButtons.js';

components.gameBoard.game.addEventListener('click', listenGameButtons);

export const state = {
  currentSequence: [],
  gameStatus: 'menu',
  roundLevel: 1,
  dataArray: [],
  diffLevel: 'easy',
  gameStack: [],
  attemptСounter: 0,
};
