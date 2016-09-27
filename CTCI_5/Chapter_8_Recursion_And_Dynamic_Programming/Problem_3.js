/*
    A magic index in an array A[0 ... n - 1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

    FOLLOW UP

    What if the values are not distinct?
*/
'use strict';

const assert = require('assert');

function chapterEightProblemThreeBruteForceSolution(array) {
    assert(typeof array === 'object');
    if (array.length === 0) {
        return null;
    }

    return recursivelyFindMagicIndex(array, 0);
}

function chapterEightProblemThreeImprovedSolution(array) {
    assert(typeof array === 'object');
    if (array.length === 0) {
        return null;
    }

    return recursiveBinarySearchForMagicIndexIfExists(array, 0, array.length - 1);
}

// O(N) time
// O(N) space
function recursivelyFindMagicIndex(array, index) {
    if (index === array.length) {
        return null;
    }
    if (array[index] === index) {
        return index;
    }
    return recursivelyFindMagicIndex(array, index + 1);
}

// O(log N) time
// O(N) space
// REDO FOR DUPLICATES
function recursiveBinarySearchForMagicIndexIfExists(array, lowIndex, highIndex) {
    if (lowIndex > highIndex) { return null; }
    const middleIndex = Math.floor((lowIndex + highIndex) / 2);

    if (array[middleIndex] < middleIndex) {
        return recursiveBinarySearchForMagicIndexIfExists(array, lowIndex, middleIndex - 1);
    } else if (array[middleIndex] > middleIndex) {
        return recursiveBinarySearchForMagicIndexIfExists(array, middleIndex + 1, highIndex);
    } else {
        return middleIndex;
    }
}

module.exports = {
    chapterEightProblemThreeBruteForceSolution: chapterEightProblemThreeBruteForceSolution,
    chapterEightProblemThreeImprovedSolution: chapterEightProblemThreeImprovedSolution,
};
