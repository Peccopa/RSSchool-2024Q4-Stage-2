export const changeDiffLevel = function (element, components) {
  const { levelEasy, levelMedium, levelHard } = components.gamelevels;
  const { keyNumPad, keyLettPad } = components.gameKeys;
  const diffLevel = element.classList[0].split('-')[1];

  [levelEasy, levelMedium, levelHard].forEach((e) =>
    e.classList.remove('selected-btn')
  );
  element.classList.add('selected-btn');
  [keyNumPad, keyLettPad].forEach((e) => e.classList.remove('inactive-key'));

  if (diffLevel === 'easy') keyLettPad.classList.add('inactive-key');
  if (diffLevel === 'medium') keyNumPad.classList.add('inactive-key');

  return diffLevel;
};
