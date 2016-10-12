/*
    Write a method to count the number of 2s that appear in all the numbers betwen 0 and n (inclusive).

    EXAMPLE
    Input: 25
    Output: 9 (2, 12, 20, 21, 22, 23, 24, 25. Note that 22 counts for two 2s.)
*/
'use strict';

const assert = require('assert');

// O(N) time, N = n
// O(1) space
// REDO SOLUTION O(log_2 N), N = n
function chapterSeventeenProblemSixBruteForceSolution(n) {
    assert(typeof n === 'number' && n % 1 === 0);
    let numberOfTwos = 0;
    for (let i = 0; i <= n; i++) {
        numberOfTwos += _countNumberOfTwos(i);
    }
    return numberOfTwos;
}

function _countNumberOfTwos(value) {
    const valueAsString = value.toString(10);
    let numberOfTwosInValue = 0;
    for (let i = 0; i < valueAsString.length; i++) {
        if (valueAsString.charAt(i) === '2') {
            numberOfTwosInValue++;
        }
    }
    return numberOfTwosInValue;
}

module.exports = {
    chapterSeventeenProblemSixBruteForceSolution: chapterSeventeenProblemSixBruteForceSolution,
};
