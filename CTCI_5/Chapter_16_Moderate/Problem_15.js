/*
    The Game of Master Mind is played as follows:

    The computer has four slots, and each slot will contain a ball that is red (R), yellow (Y), green (G), or blue (B). For example, the computer might have RGGB (Slot #1 is red, Slots #2 and #3 are green, Slot #4 is blue).

    You, the user, are trying to guess the solution. You might, for example, guess YRGB.

    When you guess the correct color for the correct slot, you get a "hit". If you guess a color that exists but is in the wrong slot, you get a "psuedo-hit". Note that a slot that is a hit can never count as a psuedo-hit.

    For example, if the actual solution is RGBY and you guess GGRR, you have one hit and one psuedo-hit.

    Write a method that, given a guess and a solution, returns the number of hits and psuedo-hits.
*/
'use strict';

const assert = require('assert');
const acceptableColors = ['R', 'Y', 'G', 'B'];

// O(1) time, guess and solution are fixed lengths, otherwise O(M * N) for variable lengths of guess and solution
// O(M + N) space
// CORRECT NO REDO
function chapterSixteenProblemFifteenBruteForceSolution(guess, solution) {
    assert(typeof guess === 'string' && typeof solution === 'string');
    assert(guess.length === 4 && solution.length === 4);
    for (let i = 0; i < 4; i++) {
        assert((acceptableColors.indexOf(guess.charAt(i)) !== -1) && (acceptableColors.indexOf(solution.charAt(i)) !== -1));
    }

    let hits = 0;
    let psuedo_hits = 0;

    let guessAsArray = guess.split('');
    let solutionAsArray = solution.split('');

    let i = 0;
    while (i < guessAsArray.length) {
        if (guessAsArray[i] === solutionAsArray[i]) {
            hits++;
            guessAsArray.splice(i, 1);
            solutionAsArray.splice(i, 1);
        } else {
            i++;
        }
    }

    i = 0;
    while (i < guessAsArray.length) {
        if (solutionAsArray.indexOf(guessAsArray[i]) !== -1) {
            psuedo_hits++;
            solutionAsArray.splice(solutionAsArray.indexOf(guessAsArray[i]), 1);
            guessAsArray.splice(i, 1);
        } else {
            i++;
        }
    }

    return [hits, psuedo_hits];
}

module.exports = {
    chapterSixteenProblemFifteenBruteForceSolution: chapterSixteenProblemFifteenBruteForceSolution,
};
