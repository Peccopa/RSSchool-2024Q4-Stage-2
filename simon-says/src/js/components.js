import { createGameBoard } from './components/gameBoard.js';
import { createNewButton } from './components/newButton.js';
import { createRepeatButton } from './components/repeatButton.js';
import { createStartButton } from './components/startButton.js';
import { createGameRounds } from './components/gameRounds.js';
import { createGameLevels } from './components/gameLevels.js';
import { createTextDisplay } from './components/textDisplay.js';
import { createGameKeys } from './components/gameKeys.js';

export const components = {};
components.gameBoard = createGameBoard(document.body);
components.newButton = createNewButton(components.gameBoard.menu);
components.repeatButton = createRepeatButton(components.gameBoard.menu);
components.gameRounds = createGameRounds(components.gameBoard.menu);
components.gamelevels = createGameLevels(components.gameBoard.menu);
components.textDisplay = createTextDisplay(components.gameBoard.display);
components.gameKeys = createGameKeys(components.gameBoard.keyboard);
components.startButton = createStartButton(components.gameBoard.start);
