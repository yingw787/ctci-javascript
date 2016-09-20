/*
    Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
*/
'use strict';

function includes(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}

const assert = require('assert');

module.exports = {
    chapterOneProblemOneBruteForceSolution: input => {
        assert(typeof input === 'string');
        const appearedCharacters = [];
        for (let i = 0; i < input.length; i++) {
            const currentCharacter = input.indexOf(i);
            if (includes(appearedCharacters, currentCharacter)) {
                return false;
            }
            appearedCharacters.push(currentCharacter);
        }
        return true;
    },
    // Big O Run: O(N^2), assuming _.includes is an O(N) operation
    // Big O Space: O(N)
    chapterOneProblemOneImprovedSolution: input => {
        assert(typeof input === 'string');
        const appearedCharacters = {};
        for (let i = 0; i < input.length; i++) {
            const currentCharacter = input.charAt(i);
            if (appearedCharacters[currentCharacter]) {
                return false;
            }
            appearedCharacters[currentCharacter] = 1;
        }
        return true;
    },

    // Big O Time: O(N)
    // Big O Space: O(1)
    // TODO: come back to this when I understand bit manipulation
    chapterOneProblemOneBookSolution: input => {
        assert(typeof input === 'string');
        let checker = 0;
        for (let i = 0; i < input.length; i++) {
            const val = input.charAt(i) - 'a';
            if ((checker && (1 << val)) > 0) {
                return false;
            }
            checker |= (1 << val);
        }
        return true;
    },
};
