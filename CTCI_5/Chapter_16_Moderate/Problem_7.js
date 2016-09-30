/*
    Write a method that finds the maximum of two numbers. You should not use if-else or any other comparison operator.
*/
'use strict';

const assert = require('assert');

// O(1) time
// O(1) space
// REDO WRONG
function chapterSixteenProblemSevenBruteForceSolution(numberOne, numberTwo) {
    assert(typeof numberOne === 'number');
    assert(typeof numberTwo === 'number');

    const max = Math.sign(numberOne - numberTwo) > 0 ? 1 : 0;
    return (numberOne * max) + (numberTwo * !max);
}

module.exports = {
    chapterSixteenProblemSevenBruteForceSolution: chapterSixteenProblemSevenBruteForceSolution,
};
