import { unblockGameKeysAndButtons } from './startNewGame.js';

export const awaitPlayerActions = function (state, components) {
  components.textDisplay.textContent = 'Try to repeat';

  console.log(state, components);
};
