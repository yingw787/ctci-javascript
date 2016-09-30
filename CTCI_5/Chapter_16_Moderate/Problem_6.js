/*
    Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. Return the difference.
*/
'use strict';

const assert = require('assert');

function chapterSixteenProblemSixBruteForceSolution(arrayOfIntegersOne, arrayOfIntegersTwo) {
    assert(typeof arrayOfIntegersOne === 'object');
    assert(typeof arrayOfIntegersTwo === 'object');
    let difference = Infinity;
    for (let i = 0; i < arrayOfIntegersOne.length; i++) {
        for (let j = 0; j < arrayOfIntegersTwo.length; j++) {
            const currentDifference = arrayOfIntegersOne[i] - arrayOfIntegersTwo[j];
            if (currentDifference < difference && currentDifference >= 0) {
                difference = currentDifference;
            }
        }
    }
    return difference;
}

module.exports = {
    chapterSixteenProblemSixBruteForceSolution: chapterSixteenProblemSixBruteForceSolution,
};
