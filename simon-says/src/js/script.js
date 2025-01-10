import { components } from './components.js';
import { changeDiffLevel } from './functionality/changeDiffLevel.js';
import { startNewGame } from './functionality/startNewGame.js';

console.log(components);

let diffLevel = 'easy';
let roundLevel = '1';
let gameStatus = 'menu';

components.gameBoard.game.addEventListener('click', (e) => {
  if (e.target === components.gamelevels.levelEasy) {
    diffLevel = changeDiffLevel(e.target, components);
  }
  if (e.target === components.gamelevels.levelMedium) {
    diffLevel = changeDiffLevel(e.target, components);
  }
  if (e.target === components.gamelevels.levelHard) {
    diffLevel = changeDiffLevel(e.target, components);
  }
  if (e.target === components.startButton) {
    gameStatus = startNewGame(components);
  }
});
