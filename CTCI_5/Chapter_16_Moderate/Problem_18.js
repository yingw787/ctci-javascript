/*
    You are given two strings, pattern and value. The pattern string consists of just the letters a and b, describing a pattern within a string. For example, the string catcatgocatgo matches the pattern aabab (where cat is a and go is b). It also matches patterns like a, ab, and b. Write a method to determine if value matches pattern.
*/
'use strict';

const assert = require('assert');

// O(N * N) time, N = value.length
// O(N * N) space (I think)
// TODO: REVIEW OR REDO
function chapterSixteenProblemEighteenBookSolutionThree(value, pattern) {
    assert(typeof value === 'string');
    assert(typeof pattern === 'string');

    if (pattern.length === 0) {
        return value.length === 0;
    }

    const mainCharacter = pattern.charAt(0);
    const alternateCharacter = (mainCharacter === 'a') ? 'b' : 'a';
    const valueSize = value.length;

    const countOfMain = _countOf(pattern, mainCharacter);
    const countOfAlternate = pattern.length - countOfMain;
    const indexOfFirstAlternate = pattern.indexOf(alternateCharacter);
    const maxMainSize = Math.floor(valueSize / countOfMain);

    for (let mainSize = 0; mainSize <= maxMainSize; mainSize++) {
        const remainingLength = valueSize - mainSize * countOfMain;
        const first = value.slice(0, mainSize);
        if (countOfAlternate === 0 || remainingLength % countOfAlternate === 0) {
            const alternateIndex = indexOfFirstAlternate * mainSize;
            const alternateSize = countOfAlternate === 0 ? 0 : Math.floor(remainingLength / countOfAlternate);
            const second = countOfAlternate === 0 ? '' : value.slice(alternateIndex, alternateSize + alternateIndex);

            const cand = _buildFromPattern(pattern, first, second);
            if (cand === value) {
                return true;
            }
        }
    }

    return false;
}

function _countOf(pattern, character) {
    let count = 0;
    for (let i = 0; i < pattern.length; i++) {
        if (pattern.charAt(i) === character) {
            count++;
        }
    }
    return count;
}

function _buildFromPattern(pattern, main, alt) {
    let result = '';
    const first = pattern.charAt(0);
    for (let c of pattern.split('')) {
        if (c === first) {
            result = result + main;
        } else {
            result = result + alt;
        }
    }
    return result;
}

module.exports = {
    chapterSixteenProblemEighteenBookSolutionThree: chapterSixteenProblemEighteenBookSolutionThree,
};
