/*
    Write a function to swap a number in place (that is, without temporary variables).
*/
'use strict';

const assert = require('assert');

// O(1) time
// O(1) space
// TODO: REVIEW
function chapterSixteenProblemOneBruteForceSolution(numberOne, numberTwo) {
    assert(typeof numberOne === 'number');
    assert(typeof numberTwo === 'number');
    numberOne = numberOne ^ numberTwo;
    numberTwo = numberOne ^ numberTwo;
    numberOne = numberOne ^ numberTwo;
    return {numberOne, numberTwo};
}

module.exports = {
    chapterSixteenProblemOneBruteForceSolution: chapterSixteenProblemOneBruteForceSolution,
};
