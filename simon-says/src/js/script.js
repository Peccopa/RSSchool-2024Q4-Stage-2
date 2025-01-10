import { components } from './components.js';
import { changeDiffLevel } from './functionality/changeDiffLevel.js';

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
    const startNewGame = function (components) {
      const { levelEasy, levelMedium, levelHard } = components.gamelevels;
      [levelEasy, levelMedium, levelHard].forEach((e) => {
        if (!e.classList.contains('selected-btn')) {
          e.classList.add('inactive-btn');
        }
      });
    };
    startNewGame(components);
    // const { keyNumPad, keyLettPad } = components.gameKeys;
    // gameStatus = 'ingame';
    // components.gamelevels.levelEasy.classList.add('selected-btn');
    // components.gamelevels.levelMedium.classList.add('inactive-btn');
    // components.gamelevels.levelHard.classList.add('inactive-btn');
  }
});
