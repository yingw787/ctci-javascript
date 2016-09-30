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
    assert(typeof n === 'number');
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

module.exports = {
    chapterSixteenProblemFiveBruteForceSolution: chapterSixteenProblemFiveBruteForceSolution,
};
