/*
    Given two strings, write a method to decide if one is a permutation of the other.
*/
'use strict';

const _addStringToDictionary = (string, dictionary) => {
    for (let i = 0; i < string.length; i++) {
        const char = string.charAt(i);
        if (char in dictionary) {
            dictionary[char]++;
        } else {
            dictionary[char] = 1;
        }
    }
};

module.exports = {
    // O(N) time
    // O(N) space
    chapterOneProblemTwoBruteForceSolution: (stringOne, stringTwo) => {
        const dictionaryOne = {};
        const dictionaryTwo = {};

        _addStringToDictionary(stringOne, dictionaryOne);
        _addStringToDictionary(stringTwo, dictionaryTwo);

        return JSON.stringify(dictionaryOne) === JSON.stringify(dictionaryTwo);
    },
    // book solution same as chapterOneProblemTwoBruteForceSolution
};
