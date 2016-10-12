/*
    Design an algorithm to figure out if someone has won a game of tic-tac-toe.
*/
'use strict';

/*
    ASSUMPTIONS:
    'X' and 'O' are players.
    ' ' is empty space.
    3x3 grid.
    only one player can win; only need to check one player.
*/

const assert = require('assert');

function _checkForWinningSolution(TicTacToeGrid, playerSymbol) {
    if (TicTacToeGrid[0][0] === playerSymbol && TicTacToeGrid[0][1] === playerSymbol && TicTacToeGrid[0][2] === playerSymbol) {
        return true;
    }
    if (TicTacToeGrid[1][0] === playerSymbol && TicTacToeGrid[1][1] === playerSymbol && TicTacToeGrid[1][2] === playerSymbol) {
        return true;
    }
    if (TicTacToeGrid[2][0] === playerSymbol && TicTacToeGrid[2][1] === playerSymbol && TicTacToeGrid[2][2] === playerSymbol) {
        return true;
    }

    if (TicTacToeGrid[0][0] === playerSymbol && TicTacToeGrid[1][0] === playerSymbol && TicTacToeGrid[2][0] === playerSymbol) {
        return true;
    }
    if (TicTacToeGrid[0][1] === playerSymbol && TicTacToeGrid[1][1] === playerSymbol && TicTacToeGrid[2][1] === playerSymbol) {
        return true;
    }
    if (TicTacToeGrid[0][2] === playerSymbol && TicTacToeGrid[1][2] === playerSymbol && TicTacToeGrid[2][2] === playerSymbol) {
        return true;
    }

    if (TicTacToeGrid[0][0] === playerSymbol && TicTacToeGrid[1][1] === playerSymbol && TicTacToeGrid[2][2] === playerSymbol) {
        return true;
    }
    if (TicTacToeGrid[0][2] === playerSymbol && TicTacToeGrid[1][1] === playerSymbol && TicTacToeGrid[2][0] === playerSymbol) {
        return true;
    }

    return false;
}

// O(1) time
// O(1) space
// CORRECT
// REDO FOR NxN BOARD, AND FOR EVERY POTENTIAL MOVE (NOT JUST THE LAST ONE)
function chapterSixteenProblemFourBruteForceSolution(TicTacToeGrid) {
    assert(typeof TicTacToeGrid === 'object');

    if (_checkForWinningSolution(TicTacToeGrid, 'X')) {
        return 'X';
    } else if (_checkForWinningSolution(TicTacToeGrid, 'O')) {
        return 'O';
    }
    return null;
}

module.exports = {
    chapterSixteenProblemFourBruteForceSolution: chapterSixteenProblemFourBruteForceSolution,
};
