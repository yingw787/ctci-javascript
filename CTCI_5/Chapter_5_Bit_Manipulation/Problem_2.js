/*
    Given a real number between 0 and 1 (e.g. 0.72) that is passed in as a double, print the binary representation. If the number cannot be represented accurately in binary with at most 32 characters, print "ERROR".
*/
'use strict';

const assert = require('assert');

function _createResultString(resultString, i, residualValue, adder) {
    const testValue = residualValue - adder;
    if (testValue < 0) {
        resultString = resultString + '0';
    } else {
        resultString = resultString + '1';
        residualValue = testValue;
    }

    if (residualValue === 0) {
        return resultString;
    } else if (i >= 32 && residualValue !== 0) {
        return 'ERROR';
    }

    return _createResultString(resultString, i + 1, residualValue, adder / 2);
}

// O(N) time, N = number of digits in realNumber
// O(N) space
// CORRECT NO REDO
function chapterFiveProblemTwoImprovedSolution(realNumber) {
    assert(typeof realNumber === 'number');

    if (realNumber < 0 || realNumber > 1) {
        throw new Error('realNumber not between 0 and 1');
    }

    const realNumberAsString = realNumber.toString(10);
    if (realNumberAsString.charAt(realNumberAsString.length - 1) !== '5') {
        return 'ERROR';
    }

    const result = '0.';
    return _createResultString(result, 1, realNumber, 0.5);
}

module.exports = {
    chapterFiveProblemTwoImprovedSolution: chapterFiveProblemTwoImprovedSolution,
};
