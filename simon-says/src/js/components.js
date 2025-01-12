import { createGameBoard } from './components/gameBoard.js';
import { createGameLevels } from './components/gameLevels.js';
import { createNewButton } from './components/newButton.js';
import { createGameRounds } from './components/gameRounds.js';
import { createRepeatButton } from './components/repeatButton.js';
import { createTextDisplay } from './components/textDisplay.js';
import { createGameKeys } from './components/gameKeys.js';
import { createStartButton } from './components/startButton.js';

export const components = {};
components.gameBoard = createGameBoard(document.body);
components.gamelevels = createGameLevels(components.gameBoard.menu);
components.newButton = createNewButton(components.gameBoard.menuBtns);
components.gameRounds = createGameRounds(components.gameBoard.menuBtns);
components.repeatButton = createRepeatButton(components.gameBoard.menuBtns);
components.textDisplay = createTextDisplay(components.gameBoard.display);
components.gameKeys = createGameKeys(components.gameBoard.keyboard);
components.startButton = createStartButton(components.gameBoard.start);
