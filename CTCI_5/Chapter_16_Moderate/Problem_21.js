/*
    Given two arrays of integers, find a pair of values (one value from each array) that you can swap to give the two arrays the same sum.

    EXAMPLE

    Input: [4, 1, 2, 1, 1, 2] and [3, 6, 3, 3]
    Output: [1, 3]
*/
'use strict';

const assert = require('assert');

// O(A * B) time, A = length of arrayOfIntegersOne, B = length of arrayOfIntegersTwo
// O(1) space
// REDO OPTIMAL SOLUTION IS O(A + B) time and O(B) space
function chapterSixteenProblemTwentyOneBruteForceSolution(arrayOfIntegersOne, arrayOfIntegersTwo) {
    assert(typeof arrayOfIntegersOne === 'object');
    assert(typeof arrayOfIntegersTwo === 'object');
    _assertIntegerTypesForArrayOfIntegers(arrayOfIntegersOne);
    _assertIntegerTypesForArrayOfIntegers(arrayOfIntegersTwo);

    const sumOfArrayOfIntegersOne = _generateSum(arrayOfIntegersOne);
    const sumOfArrayOfIntegersTwo = _generateSum(arrayOfIntegersTwo);

    if (sumOfArrayOfIntegersOne === sumOfArrayOfIntegersTwo) {
        return null;
    } else {
        if (sumOfArrayOfIntegersOne < sumOfArrayOfIntegersTwo) {
            for (let i = 0; i < arrayOfIntegersOne.length; i++) {
                for (let j = 0; j < arrayOfIntegersTwo.length; j++) {
                    const difference = arrayOfIntegersOne[i] - arrayOfIntegersTwo[j];
                    if (difference < 0 && sumOfArrayOfIntegersOne - difference === sumOfArrayOfIntegersTwo + difference) {
                        return [arrayOfIntegersOne[i], arrayOfIntegersTwo[j]];
                    }
                }
            }
        } else {
            for (let i = 0; i < arrayOfIntegersOne.length; i++) {
                for (let j = 0; j < arrayOfIntegersTwo.length; j++) {
                    const difference = arrayOfIntegersTwo[j] - arrayOfIntegersOne[i];
                    if (difference < 0 && sumOfArrayOfIntegersTwo - difference === sumOfArrayOfIntegersOne + difference) {
                        return [arrayOfIntegersOne[i], arrayOfIntegersTwo[j]];
                    }
                }
            }
        }

        return null;
    }
}

function _assertIntegerTypesForArrayOfIntegers(arrayOfIntegers) {
    for (let i = 0; i < arrayOfIntegers.length; i++) {
        assert(typeof arrayOfIntegers[i] === 'number' && arrayOfIntegers[i] % 1 === 0);
    }
}

function _generateSum(arrayOfIntegers) {
    return arrayOfIntegers.reduce(function(a, b) {
        return a + b;
    }, 0);
}

module.exports = {
    chapterSixteenProblemTwentyOneBruteForceSolution: chapterSixteenProblemTwentyOneBruteForceSolution,
};
