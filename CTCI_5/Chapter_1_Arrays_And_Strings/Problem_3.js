/*
    Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)
*/
'use strict';

const assert = require('assert');

module.exports = {
    // O(N) time
    // O(N) space
    chapterOneProblemThreeBruteForceSolution: input => {
        assert(typeof input === 'string');

        let result = '';

        for (let i = 0; i < input.length; i++) {
            const currentCharacter = input.charAt(i);
            if (JSON.stringify(currentCharacter) === JSON.stringify(' ')) {
                result += '%20';
            } else {
                result += currentCharacter;
            }
        }

        return result;
    },
};
