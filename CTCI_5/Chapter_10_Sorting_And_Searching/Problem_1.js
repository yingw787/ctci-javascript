/*
    You are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B. Write a method to merge B into A in sorted order.
*/
'use strict';

const assert = require('assert');

function _comparatorAscendingOrderNumber(numberOne, numberTwo) {
    return numberOne < numberTwo;
}

function _arrayIsSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (!_comparatorAscendingOrderNumber(array[i], array[i + 1])) {
            return false;
        }
    }
    return true;
}

function chapterTenProblemOneBruteForceSolution(sortedArrayA, sortedArrayB) {
    assert(typeof sortedArrayA === 'object');
    assert(typeof sortedArrayB === 'object');

    if (!_arrayIsSorted(sortedArrayA) || !_arrayIsSorted(sortedArrayB)) {
        throw new Error('arrays are not sorted.');
    }

    let resultArray = [];
    resultArray = resultArray.concat(sortedArrayA);

    for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i] > sortedArrayB[0]) {
            const sortedArrayBValue = sortedArrayB.shift();
            resultArray.splice(i, 0, sortedArrayBValue);
        }
    }

    if (sortedArrayB.length) {
        resultArray = resultArray.concat(sortedArrayB);
    }

    return resultArray;
}

module.exports = {
    chapterTenProblemOneBruteForceSolution: chapterTenProblemOneBruteForceSolution,
};
