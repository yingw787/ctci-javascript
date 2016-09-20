/*
    Given two strings, write a method to decide if one is a permutation of the other.
*/
'use strict';

function _addStringToDictionary(input, dictionary) {
    for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        if (char in dictionary) {
            dictionary[char]++;
        } else {
            dictionary[char] = 1;
        }
    }
}

const assert = require('assert');

module.exports = {
    // O(N) time
    // O(N) space
    chapterOneProblemTwoBruteForceSolution: (inputOne, inputTwo) => {
        assert(typeof inputOne === 'string');
        assert(typeof inputTwo === 'string');

        const dictionaryOne = {};
        const dictionaryTwo = {};

        _addStringToDictionary(inputOne, dictionaryOne);
        _addStringToDictionary(inputTwo, dictionaryTwo);

        return JSON.stringify(dictionaryOne) === JSON.stringify(dictionaryTwo);
    },
    // book solution same as chapterOneProblemTwoBruteForceSolution
};
