/*
    Given an array filled with letters and numbers, find the longest subarray with an equal number of letters and numbers.
*/
'use strict';

const assert = require('assert');

// O(N * N) time
// O(N) space
// REDO O(N) time
function chapterSeventeenProblemFiveBruteForceSolution(arrayWithLettersAndNumbers) {
    assert(typeof arrayWithLettersAndNumbers === 'object');

    if (arrayWithLettersAndNumbers.length < 2) {
        return arrayWithLettersAndNumbers;
    }

    let maximumLength = 0;
    let maximumLengthSubarray = [];
    for (let i = 0; i < arrayWithLettersAndNumbers.length - 1; i++) {
        for (let j = i + 1; j < arrayWithLettersAndNumbers.length; j++) {
            if (_checkSubarrayHasEqualNumberOfLettersAndNumbers(arrayWithLettersAndNumbers.slice(i, j + 1)) && arrayWithLettersAndNumbers.slice(i, j + 1).length > maximumLength) {
                maximumLength = arrayWithLettersAndNumbers.slice(i, j + 1).length;
                maximumLengthSubarray = arrayWithLettersAndNumbers.slice(i, j + 1);
            }
        }
    }

    return maximumLengthSubarray;
}

function _checkSubarrayHasEqualNumberOfLettersAndNumbers(subArrayOfLettersAndNumbers) {
    let numberOfLetters = 0;
    let numberOfNumbers = 0;
    for (let i = 0; i < subArrayOfLettersAndNumbers.length; i++) {
        if (typeof subArrayOfLettersAndNumbers[i] === 'number') {
            numberOfNumbers++;
        } else {
            numberOfLetters++;
        }
    }
    return numberOfLetters === numberOfNumbers;
}

module.exports = {
    chapterSeventeenProblemFiveBruteForceSolution: chapterSeventeenProblemFiveBruteForceSolution,
};
