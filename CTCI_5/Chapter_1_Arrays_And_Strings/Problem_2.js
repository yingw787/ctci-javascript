/*
    Given two strings, write a method to decide if one is a permutation of the other.
*/
'use strict';

function _addStringToDictionary(input, dictionary) {
    for (let letter of input) {
        if (letter in dictionary) {
            dictionary[letter]++;
        } else {
            dictionary[letter] = 1;
        }
    }
}

const assert = require('assert');

// O(N) time
// O(N) space
// CORRECT NO REDO
function chapterOneProblemTwoBruteForceSolution(inputOne, inputTwo) {
    assert(typeof inputOne === 'string');
    assert(typeof inputTwo === 'string');

    const dictionaryOne = {};
    const dictionaryTwo = {};

    _addStringToDictionary(inputOne, dictionaryOne);
    _addStringToDictionary(inputTwo, dictionaryTwo);

    return JSON.stringify(dictionaryOne) === JSON.stringify(dictionaryTwo);
}

module.exports = {
    chapterOneProblemTwoBruteForceSolution: chapterOneProblemTwoBruteForceSolution,
};
