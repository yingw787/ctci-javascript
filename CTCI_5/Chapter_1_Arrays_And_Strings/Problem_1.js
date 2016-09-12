/*
    Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
*/
'use strict';
const _ = require('lodash');

module.exports = {
    chapterOneProblemOneBruteForceSolution: function(string) {
        let appearedCharacters = [];
        for (let i = 0; i < string.length; i++) {
            const currentCharacter = string.indexOf(i);
            if (_.includes(appearedCharacters, currentCharacter)) {
                return false;
            }
            appearedCharacters.push(currentCharacter);
        }
        return true;
    },
    // Big O Run: O(N^2), assuming _.includes is an O(N) operation
    // Big O Space: O(N)
    chapterOneProblemOneImprovedSolution: function(string) {
        let appearedCharacters = {};
        for (let i = 0; i < string.length; i++) {
            const currentCharacter = string.charAt(i);
            if (appearedCharacters.hasOwnProperty(currentCharacter)) {
                return false;
            }
            appearedCharacters[currentCharacter] = 1;
        }
        return true;
    },
};
