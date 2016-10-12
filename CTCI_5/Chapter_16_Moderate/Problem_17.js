/*
    You are given an array of integers (both positive and negative). Find the contiguous sequence with the largest sum. Return the sum.

    EXAMPLE

    Input: [2, -8, 3, -2, 4, -10]
    Output: 5  (3, -2, 4)
*/
'use strict';

const assert = require('assert');

// O(N * N) time, N = arrayOfIntegers.length
// O(N) space, N = arrayOfIntegers.length
// INCORRECT REDO MINIMUM SUM IS ALWAYS 0, SOLUTION IN O(N) TIME
function chapterSixteenProblemSeventeenBruteForceSolution(arrayOfIntegers) {
    assert(typeof arrayOfIntegers === 'object');
    for (let i = 0; i < arrayOfIntegers.length; i++) {
        assert(typeof arrayOfIntegers[i] === 'number' && arrayOfIntegers[i] % 1 === 0);
    }
    if (arrayOfIntegers.length === 0) {
        return null;
    }
    if (arrayOfIntegers.length === 1) {
        return arrayOfIntegers[0];
    }

    let currentMaximumSum = -Infinity;
    for (let i = 0; i < arrayOfIntegers.length; i++) {
        for (let j = i + 1; j < arrayOfIntegers.length + 1; j++) {
            const currentSum = _sumValuesInArray(arrayOfIntegers.slice(i, j));
            if (currentSum > currentMaximumSum) {
                currentMaximumSum = currentSum;
            }
        }
    }

    return currentMaximumSum;
}

function _sumValuesInArray(array) {
    return array.reduce(function(a, b) {
        return a + b;
    }, 0);
}

module.exports = {
    chapterSixteenProblemSeventeenBruteForceSolution: chapterSixteenProblemSeventeenBruteForceSolution,
};
