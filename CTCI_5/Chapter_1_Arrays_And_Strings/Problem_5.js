/*
    There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
*/
'use strict';

const assert = require('assert');

function _checkCharactersAreTheSameExceptOneExtra(inputOne, inputTwo) {
    assert(typeof inputOne === 'string');
    assert(typeof inputTwo === 'string');

    let shorterString, longerString;
    if (inputOne.length > inputTwo.length) {
        longerString = inputOne;
        shorterString = inputTwo;
    }
    let j = 0;
    let i = 0;
    let oneCharacterDifferent = false;
    for (i = 0; i < shorterString.length; i++) {
        const shorterStringCurrentCharacter = shorterString.charAt[i];
        const longerStringCurrentCharacter = longerString.charAt[j];
        if (JSON.stringify(shorterStringCurrentCharacter) !== JSON.stringify(longerStringCurrentCharacter)) {
            if (oneCharacterDifferent) {
                return false;
            } else {
                j += 2;
                oneCharacterDifferent = true;
            }
        } else {
            j++;
        }
    }
    if (i === j) {
        if (oneCharacterDifferent) {
            return false;
        }
    }
    return true;
}

function _checkStringsAreTheSameExceptOneDifferentCharacter(inputOne, inputTwo) {
    assert(typeof inputOne === 'string');
    assert(typeof inputTwo === 'string');

    let oneDifferent = false;
    for (let i = 0; i < inputOne.length; i++) {
        const inputOneCurrentCharacter = inputOne.charAt(i);
        const inputTwoCurrentCharacter = inputTwo.charAt(i);
        if (JSON.stringify(inputOneCurrentCharacter) !== JSON.stringify(inputTwoCurrentCharacter)) {
            if (oneDifferent) {
                return false;
            } else {
                oneDifferent = true;
            }
        }
    }
    return true;
}

// O(N) time
// O(N) space
// CORRECT NO REDO
function chapterOneProblemFiveBruteForceSolution(inputOne, inputTwo) {
    assert(typeof inputOne === 'string');
    assert(typeof inputTwo === 'string');

    if (inputOne.length !== inputTwo.length) {
        if (Math.abs(inputOne.length - inputTwo.length) > 1) {
            return false;
        }
        if (!_checkCharactersAreTheSameExceptOneExtra(inputOne, inputTwo)) {
            return false;
        }
    } else {
        if (!_checkStringsAreTheSameExceptOneDifferentCharacter(inputOne, inputTwo)) {
            return false;
        }
    }
    return true;
}

module.exports = {
    chapterOneProblemFiveBruteForceSolution: chapterOneProblemFiveBruteForceSolution,
};
