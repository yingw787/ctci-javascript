/*
    Given a sorted array of n integers that has been rotated an unknown number of times, write code to find an element in the array. You may assume that the array was originally sorted in increasing order.
*/
'use strict';

const assert = require('assert');
const ArrayOfNumbers_BinarySearch = require('../Chapter_VII_Technical_Questions/ArrayOfNumbers_BinarySearch');

function _unRotateArray(arrayOfIntegers) {
    const newArrayOfIntegers = arrayOfIntegers.concat(arrayOfIntegers);
    let i = 0;
    while (newArrayOfIntegers[i] > newArrayOfIntegers[i + 1] && i < arrayOfIntegers.length) {
        i++;
    }
    return newArrayOfIntegers.slice(i, i + arrayOfIntegers.length);
}

// O(N) time, N = number of values in array
// O(N) space
// REDO with O(log N) time and O(1) space
function chapterTenProblemThreeBruteForceSolution(arrayOfIntegers, value) {
    assert(typeof arrayOfIntegers === 'object');
    return new ArrayOfNumbers_BinarySearch(_unRotateArray(arrayOfIntegers)).binarySearch(value);
}

module.exports = {
    chapterTenProblemThreeBruteForceSolution: chapterTenProblemThreeBruteForceSolution,
};
