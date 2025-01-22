import { addBlockKeys } from './startNewGame.js';

export const selectNewGame = function (state, components) {
  addBlockKeys(components.gameKeys.allKeys);
  state.roundLevel = 1;
  state.currentSequence = [];
  state.gameStatus = 'menu';
  state.dataArray = [];
  state.gameStack = [];
  state.attemptСounter = 0;

  const {
    gamelevels: { levelEasy, levelMedium, levelHard },
  } = components;

  [levelEasy, levelMedium, levelHard].forEach((e) => {
    if (e.classList.contains('inactive-btn'))
      e.classList.remove('inactive-btn');
  });

  components.textDisplay.textContent = 'Simon Says Game';
  components.gameRounds.roundsCount.textContent = 1;

  components.newButton.classList.remove('blinked-btn');
  components.gameBoard.display.classList.add('inactive-display');
  components.newButton.classList.add('inactive-btn');
  components.repeatButton.classList.add('inactive-btn');
  components.repeatButton.classList.remove('blinked-btn');
  components.repeatButton.textContent = 'Repeat sequence';
  components.startButton.classList.remove('inactive-btn');
  components.gameRounds.gameRounds.classList.add('inactive-rounds');
};
