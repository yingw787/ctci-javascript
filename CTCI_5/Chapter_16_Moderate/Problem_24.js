/*
    Design an algorithm to find all pairs of integers within an array which sum to a specified value.
*/
'use strict';

const assert = require('assert');

// O(N) time
// O(N) space
// REDO FOR OPTIMIZED SOLUTION
function chapterSixteenProblemTwentyFourBruteForceSolution(arrayOfIntegers, value) {
    _assertCorrectType(arrayOfIntegers, value);

    const results = [];
    for (let i = 0; i < arrayOfIntegers.length - 1; i++) {
        for (let j = i + 1; j < arrayOfIntegers.length; j++) {
            if (arrayOfIntegers[i] + arrayOfIntegers[j] === value) {
                results.push([arrayOfIntegers[i], arrayOfIntegers[j]]);
            }
        }
    }

    return results;
}

function _assertCorrectType(arrayOfIntegers, value) {
    assert(typeof arrayOfIntegers === 'object');
    assert(arrayOfIntegers.length > 1);
    for (let i = 0; i < arrayOfIntegers.length; i++) {
        assert(typeof arrayOfIntegers[i] === 'number' && arrayOfIntegers[i] % 1 === 0);
    }

    assert(typeof value === 'number' && value % 1 === 0);
}

module.exports = {
    chapterSixteenProblemTwentyFourBruteForceSolution: chapterSixteenProblemTwentyFourBruteForceSolution,
};
