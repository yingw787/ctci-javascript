/*
    On old cell phones, users typed on a numeric keypad and the phone would provide a list of words that matched these numbers. Each digit mapped to a set of 0-4 letters. Implement an algorithm to return a list of matching words, given a sequence of digits. You are provided a list of valid words (provided in whatever data structure you'd like). The mapping is shown in the diagram below:

    EXAMPLE

    {
        '1': [],
        '2': [a, b, c],
        '3': [d, e, f],
        '4': [g, h, i],
        '5': [j, k, l],
        '6': [m, n, o],
        '7': [p, q, r, s],
        '8': [t, u, v],
        '9': [w, x, y, z],
        '0': []
    }

    Input: 8733
    Output: [tree, used]
*/
'use strict';

const assert = require('assert');

const keypad = {
    '1': [],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
    '0': [],
};

// O(N * M) time, N = dictionary.length, M = word length
// O(N) space
// TODO: REVIEW
function chapterSixteenProblemTwentyBruteForceSolution(digits, dictionary) {
    assert(typeof digits === 'number' && digits >= 1000 && digits <= 9999);

    const results = [];
    for (let word of dictionary) {
        if (_wordConvertsToCorrectDigits(word, digits)) {
            results.push(word);
        }
    }

    return results;
}

function _wordConvertsToCorrectDigits(word, digits) {
    let resultNumber = '';
    for (let i = 0; i < word.length; i++) {
        const currentCharacter = word.charAt(i);
        for (let keypadNumber of Object.keys(keypad)) {
            if (keypad[keypadNumber].indexOf(currentCharacter) !== -1) {
                resultNumber = resultNumber + keypadNumber;
            }
        }
    }

    resultNumber = parseInt(resultNumber, 10);
    return digits === resultNumber;
}

module.exports = {
    chapterSixteenProblemTwentyBruteForceSolution: chapterSixteenProblemTwentyBruteForceSolution,
};
