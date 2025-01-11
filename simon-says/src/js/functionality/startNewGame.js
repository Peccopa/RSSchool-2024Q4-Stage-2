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
};

export const blockGameKeysAndButtons = function (state, components) {
  function blockGameKeys(object) {
    for (const key in object) {
      object[key].classList.add('blocked-key');
    }
  }
  blockGameKeys(components.gameKeys.letterKeys);
  blockGameKeys(components.gameKeys.numberKeys);
  components.newButton.classList.add('blocked-btn');
  components.repeatButton.classList.add('blocked-btn');
};

export const unblockGameKeysAndButtons = function (state, components) {
  function unblockGameKeys(object) {
    for (const key in object) {
      object[key].classList.remove('blocked-key');
    }
  }
  unblockGameKeys(components.gameKeys.letterKeys);
  unblockGameKeys(components.gameKeys.numberKeys);
  components.newButton.classList.remove('blocked-btn');
  components.repeatButton.classList.remove('blocked-btn');
};
