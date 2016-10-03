/*
    Given a sorted array of strings that is interspersed with empty strings, write a method to find the location of a given string.

    EXAMPLE

    Input: ball, {"at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""}
    Output: 4
*/
'use strict';

const assert = require('assert');

// O(N) time
// O(1) space

function chapterTenProblemFiveBruteForceSolution(sortedArrayOfStrings, value) {
    assert(typeof sortedArrayOfStrings === 'object');
    assert(typeof value === 'string');
    for (let i = 0; i < sortedArrayOfStrings.length; i++) {
        if (sortedArrayOfStrings[i] === value) {
            return i;
        }
    }
    return -1;
}

// O(log N) time, average case
// O(1) space
function chapterTenProblemFiveImprovedSolution(sortedArrayOfStrings, value) {
    assert(typeof sortedArrayOfStrings === 'object');
    assert(typeof value === 'string');

    let lowIndex = 0;
    let highIndex = sortedArrayOfStrings.length - 1;
    let middleIndex;
    while (lowIndex <= highIndex) {
        middleIndex = Math.floor((lowIndex + highIndex) / 2);

        while (sortedArrayOfStrings[lowIndex] === '') {
            lowIndex++;
        }
        while (sortedArrayOfStrings[highIndex] === '') {
            highIndex--;
        }
        while (sortedArrayOfStrings[middleIndex] === '') {
            middleIndex++;
        }

        if (sortedArrayOfStrings[middleIndex].localeCompare(value) < 0) {
            lowIndex = middleIndex + 1;
        } else if (sortedArrayOfStrings[middleIndex].localeCompare(value) > 0) {
            highIndex = middleIndex;
        } else if (sortedArrayOfStrings[middleIndex] === value) {
            return middleIndex;
        }
    }

    return -1;
}

module.exports = {
    chapterTenProblemFiveBruteForceSolution: chapterTenProblemFiveBruteForceSolution,
    chapterTenProblemFiveImprovedSolution: chapterTenProblemFiveImprovedSolution,
};
