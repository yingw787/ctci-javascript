/*
    Write a function that adds two numbers. You should not use + or any arithmetic operators.
*/
'use strict';

const assert = require('assert');

// O(N) time, N = maximum number of digits beteewn inputOne and inputTwo
// O(N) space
// TODO: REVIEW
function chapterSeventeenProblemOneBruteForceSolution(inputOne, inputTwo) {
    assert(typeof inputOne === 'number' && typeof inputTwo === 'number');

    let carry = inputOne & inputTwo;
    let result = inputOne ^ inputTwo;
    while (carry !== 0) {
        const shiftedcarry = carry << 1;
        carry = result & shiftedcarry;
        result ^= shiftedcarry;
    }
    return result;
}

module.exports = {
    chapterSeventeenProblemOneBruteForceSolution: chapterSeventeenProblemOneBruteForceSolution,
};
