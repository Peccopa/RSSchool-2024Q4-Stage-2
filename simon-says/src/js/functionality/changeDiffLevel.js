export const changeDiffLevel = function (element, state, components) {
  state.diffLevel = element.classList[0].split('-')[1];
  const {
    gamelevels: { levelEasy, levelMedium, levelHard },
    gameKeys: { keyNumPad, keyLettPad },
  } = components;

  [levelEasy, levelMedium, levelHard].forEach((e) =>
    e.classList.remove('selected-btn')
  );
  element.classList.add('selected-btn');
  [keyNumPad, keyLettPad].forEach((e) => e.classList.remove('inactive-key'));

  if (state.diffLevel === 'easy') keyLettPad.classList.add('inactive-key');
  if (state.diffLevel === 'medium') keyNumPad.classList.add('inactive-key');
};
