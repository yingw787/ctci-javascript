/*
    Write an algorithm which computes the number of trailing zeros in n factorial.
*/
'use strict';

const assert = require('assert');

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// O(N) time
// O(N) space
// REDO need to be more efficient
function chapterSixteenProblemFiveBruteForceSolution(n) {
    assert(typeof n === 'number' && n % 1 === 0 && n > 0);
    if (n % 1 !== 0 || n < 1) {
        throw new Error('n must be a positive integer.');
    }
    const nFactorialAsString = factorial(n).toString(10);
    let i = 0;
    while (i < nFactorialAsString.length) {
        if (nFactorialAsString.charAt(nFactorialAsString.length - 1 - i) !== '0') {
            break;
        }
        i++;
    }
    return i;
}

// O(N * K) time, N = n, K = largest number of factors of either 2 or 5
// O(1) space
// CORRECT NO REDO
function chapterSixteenProblemFiveImprovedSolution(n) {
    // count the number of factors of five and two
    assert(typeof n === 'number' && n % 1 === 0 && n > 0);
    let numberOfFactorsOfTwo = 0;
    let numberOfFactorsOfFive = 0;

    for (let i = 1; i <= n; i++) {
        const value = i;
        numberOfFactorsOfTwo += _calculateNumberOfFactorsOfTwo(value);
        numberOfFactorsOfFive += _calculateNumberOfFactorsOfFive(value);
    }

    return Math.min(numberOfFactorsOfTwo, numberOfFactorsOfFive);
}

function _calculateNumberOfFactorsOfTwo(value) {
    let numberOfFactorsOfTwo = 0;
    while (value % 2 === 0) {
        numberOfFactorsOfTwo++;
        value /= 2;
    }
    return numberOfFactorsOfTwo;
}

function _calculateNumberOfFactorsOfFive(value) {
    let numberOfFactorsOfFive = 0;
    while (value % 5 === 0) {
        numberOfFactorsOfFive++;
        value /= 5;
    }
    return numberOfFactorsOfFive;
}

module.exports = {
    chapterSixteenProblemFiveBruteForceSolution: chapterSixteenProblemFiveBruteForceSolution,
    chapterSixteenProblemFiveImprovedSolution: chapterSixteenProblemFiveImprovedSolution,
};
