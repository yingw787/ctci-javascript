/*
    Given an array of integers, write a method to find indices m and n such that if you sorted elements m through n, the entire array would be sorted. Minimize n - m (that is, find the smallest such sequence).

    EXAMPLE

    Input: [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
    Output: [3, 9]
*/
'use strict';

const assert = require('assert');
const MergeSort = require('../Chapter_VII_Technical_Questions/ArrayOfNumbers_MergeSort');

// O(N * N) time, N = arrayOfIntegers.length
// O(N * N) space, N = arrayOfIntegers.length
// TODO: REVIEW
function chapterSixteenProblemSixteenBruteForceSolution(arrayOfIntegers) {
    assert(typeof arrayOfIntegers === 'object');
    for (let i = 0; i < arrayOfIntegers.length; i++) {
        assert(typeof arrayOfIntegers[i] === 'number' && arrayOfIntegers[i] % 1 === 0);
    }
    if (arrayOfIntegers.length < 2) {
        return [0, 0];
    }
    const sortedArrayOfIntegers = new MergeSort(arrayOfIntegers.slice()).sortByAscendingOrder();
    const arrayOfSortIndexes = [];
    for (let i = 0; i < arrayOfIntegers.length - 1; i++) {
        for (let j = i + 1; j < arrayOfIntegers.length; j++) {
            let arrayOfIntegersPrevious = (i === 0) ? [] : arrayOfIntegers.slice(0, i);
            let sortedSubsection = new MergeSort(arrayOfIntegers.slice(i, j + 1)).sortByAscendingOrder();
            let arrayOfIntegersAfter = (j === arrayOfIntegers.length - 1) ? [] : arrayOfIntegers.slice(j + 1, arrayOfIntegers.length);
            const possibleSortedArrayOfIntegers = arrayOfIntegersPrevious.concat(sortedSubsection).concat(arrayOfIntegersAfter);
            if (JSON.stringify(possibleSortedArrayOfIntegers) === JSON.stringify(sortedArrayOfIntegers)) {
                arrayOfSortIndexes.push([i, j]);
            }
        }
    }
    let indexWithMinimizedDifference = null;
    let minimumDifference = null;
    for (let i = 0; i < arrayOfSortIndexes.length; i++) {
        if (!indexWithMinimizedDifference || arrayOfSortIndexes[i][1] - arrayOfSortIndexes[i][0] < minimumDifference) {
            indexWithMinimizedDifference = arrayOfSortIndexes[i];
            minimumDifference = arrayOfSortIndexes[i][1] - arrayOfSortIndexes[i][0];
        }
    }
    return indexWithMinimizedDifference;
}

module.exports = {
    chapterSixteenProblemSixteenBruteForceSolution: chapterSixteenProblemSixteenBruteForceSolution,
};
