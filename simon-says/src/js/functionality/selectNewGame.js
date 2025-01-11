import { blockGameKeysAndButtons } from './startNewGame.js';

export const selectNewGame = function (state, components) {
  state.roundLevel = 1;
  state.currentSequence = [];
  state.gameStatus = 'menu';
  state.dataArray = [];

  const {
    gamelevels: { levelEasy, levelMedium, levelHard },
  } = components;

  [levelEasy, levelMedium, levelHard].forEach((e) => {
    if (e.classList.contains('inactive-btn'))
      e.classList.remove('inactive-btn');
  });

  components.textDisplay.textContent = 'Simon Says Game';
  components.gameRounds.roundsCount.textContent = 1;

  components.gameBoard.display.classList.add('inactive-display');
  components.newButton.classList.add('inactive-btn');
  components.repeatButton.classList.add('inactive-btn');
  components.startButton.classList.remove('inactive-btn');
  components.gameRounds.gameRounds.classList.add('inactive-rounds');

  function blockGameKeys(object) {
    for (const key in object) {
      object[key].classList.add('blocked-key');
    }
  }
  blockGameKeys(components.gameKeys.letterKeys);
  blockGameKeys(components.gameKeys.numberKeys);
};
