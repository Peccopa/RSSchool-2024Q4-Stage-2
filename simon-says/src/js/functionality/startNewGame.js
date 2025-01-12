import { keyboardListener } from './keyboardListener.js';
import { components } from '../components.js';

export const startNewGame = function (state, components) {
  state.gameStatus = 'sequence';
  state.currentSequence = [];
  const {
    textDisplay,
    newButton,
    startButton,
    repeatButton,
    gameBoard: { display },
    gameRounds: { gameRounds },
    gamelevels: { levelEasy, levelMedium, levelHard },
  } = components;

  [levelEasy, levelMedium, levelHard].forEach((e) => {
    if (!e.classList.contains('selected-btn')) e.classList.add('inactive-btn');
  });
  [newButton, repeatButton, gameRounds].forEach((e) => {
    e.classList.contains('inactive-btn')
      ? e.classList.remove('inactive-btn')
      : e.classList.remove('inactive-rounds');
  });
  display.classList.remove('inactive-display');
  startButton.classList.add('inactive-btn');
  components.startButton.classList.remove('blinked-btn');
};

export const toggleBlockButton = function (button) {
  button.classList.toggle('blocked-btn');
};

export const addBlockKeys = function (object) {
  components.gameBoard.game.removeEventListener('keydown', keyboardListener);
  for (const key in object) {
    object[key].classList.add('blocked-key');
  }
};

export const removeBlockKeys = function (object) {
  components.gameBoard.game.addEventListener('keydown', keyboardListener);
  for (const key in object) {
    object[key].classList.remove('blocked-key');
  }
};
