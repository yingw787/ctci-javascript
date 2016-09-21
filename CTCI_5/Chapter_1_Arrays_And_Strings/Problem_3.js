/*
    Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)
*/
'use strict';

const assert = require('assert');

// O(N) time
// O(N) space
// CORRECT NO REDO
function chapterOneProblemThreeBruteForceSolution(input) {
    assert(typeof input === 'string');

    let result = '';

    for (let currentCharacter of input) {
        if (currentCharacter === ' ') {
            result += '%20';
        } else {
            result += currentCharacter;
        }
    }

    return result;
}

module.exports = {
    chapterOneProblemThreeBruteForceSolution: chapterOneProblemThreeBruteForceSolution,
};
