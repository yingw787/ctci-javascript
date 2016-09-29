/*
    Given a sorted array of strings that is interspersed with empty strings, write a method to find the location of a given string.

    EXAMPLE

    Input: ball, {"at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""}
    Output: 4
*/
'use strict';

const assert = require('assert');

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

module.exports = {
    chapterTenProblemFiveBruteForceSolution: chapterTenProblemFiveBruteForceSolution,
};
