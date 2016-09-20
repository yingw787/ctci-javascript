/*
    Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
*/
'use strict';

const assert = require('assert');

function _addStringToDictionary(input, dictionary) {
    for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        if (JSON.stringify(char) === JSON.stringify(' ')) { continue; }
        if (char in dictionary) {
            dictionary[char]++;
        } else {
            dictionary[char] = 1;
        }
    }
}

// O(N) time, N being size of string
// O(N) space, N being size of string
// REDO, CORRECT SOLUTION O(N) time O(1) space
function chapterOneProblemFourBruteForceSolution(input) {
    assert(typeof input === 'string');
    const dictionary = {};
    let oneOdd = false;
    _addStringToDictionary(input, dictionary);
    for (const key in dictionary) {
        if (dictionary[key] % 2 !== 0) {
            if (oneOdd) {
                return false;
            } else {
                oneOdd = true;
            }
        }
    }
    return true;
}

module.exports = {
    chapterOneProblemFourBruteForceSolution: chapterOneProblemFourBruteForceSolution,
};
