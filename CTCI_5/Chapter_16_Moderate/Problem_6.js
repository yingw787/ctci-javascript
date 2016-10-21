/*
    Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. Return the difference.
*/
'use strict';

const assert = require('assert');
const MergeSort = require('../Chapter_VII_Technical_Questions/ArrayOfNumbers_MergeSort');

// O(N * M), N = length of arrayOfIntegersOne, M = length of arrayOfIntegersTwo
// O(1) space
// REDO O(N * log N + M * log M) time, O(1) space
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

// O(A * log A + B * log B) time, A = length of arrayOfIntegersOne, B = arrayOfIntegersTwo
// O(A + B) space
// TODO: REVIEW
function chapterSixteenProblemSixBookSolution(arrayOfIntegersOne, arrayOfIntegersTwo) {
    _assertArrayOfIntegers(arrayOfIntegersOne);
    _assertArrayOfIntegers(arrayOfIntegersTwo);

    let sortedArrayOfIntegersOne = new MergeSort(arrayOfIntegersOne).sortByAscendingOrder();
    if (sortedArrayOfIntegersOne.length === 0) {
        return null;
    }
    const sortedArrayOfIntegersTwo = new MergeSort(arrayOfIntegersTwo).sortByAscendingOrder();

    let a = 0;
    let b = 0;

    let minimumDifference = Infinity;

    while (a < sortedArrayOfIntegersOne.length && b < sortedArrayOfIntegersTwo.length) {
        if (Math.abs(sortedArrayOfIntegersOne[a] - sortedArrayOfIntegersTwo[b]) < minimumDifference) {
            minimumDifference = Math.abs(sortedArrayOfIntegersOne[a] - sortedArrayOfIntegersTwo[b]);
        }

        if (sortedArrayOfIntegersOne[a] < sortedArrayOfIntegersTwo[b]) {
            a++;
        } else {
            b++;
        }
    }

    return minimumDifference;
}

function _assertArrayOfIntegers(arrayOfIntegers) {
    assert(typeof arrayOfIntegers === 'object');
    for (let i = 0; i < arrayOfIntegers.length; i++) {
        const value = arrayOfIntegers[i];
        assert(typeof value === 'number' && value % 1 === 0);
    }
}

module.exports = {
    chapterSixteenProblemSixBruteForceSolution: chapterSixteenProblemSixBruteForceSolution,
    chapterSixteenProblemSixBookSolution: chapterSixteenProblemSixBookSolution,
};
