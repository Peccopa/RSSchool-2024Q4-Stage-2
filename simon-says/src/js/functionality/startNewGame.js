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
  textDisplay.textContent = 'Try to remember';
  startButton.classList.add('inactive-btn');

  function blockGameKeys(object) {
    for (const key in object) {
      object[key].classList.add('blocked-key');
    }
  }
  blockGameKeys(components.gameKeys.letterKeys);
  blockGameKeys(components.gameKeys.numberKeys);
  newButton.classList.add('blocked-btn');
  repeatButton.classList.add('blocked-btn');
};
