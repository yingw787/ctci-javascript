/*
    There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
*/
'use strict';

const assert = require('assert');

function _areInputsTheSameExceptForAnExtraCharacter(inputOne, inputTwo) {
    assert(typeof inputOne === 'string');
    assert(typeof inputTwo === 'string');

    let shorterString, longerString;
    if (inputOne.length > inputTwo.length) {
        longerString = inputOne;
        shorterString = inputTwo;
    } else {
        longerString = inputTwo;
        shorterString = inputOne;
    }
    let {longerStringIndex, shorterStringIndex} = 0;
    let oneCharacterDifferent = false;
    for (shorterStringIndex = 0; shorterStringIndex < shorterString.length; shorterStringIndex++) {
        const shorterStringCurrentCharacter = shorterString.charAt[shorterStringIndex];
        const longerStringCurrentCharacter = longerString.charAt[longerStringIndex];
        if (shorterStringCurrentCharacter !== longerStringCurrentCharacter) {
            if (oneCharacterDifferent) {
                return false;
            } else {
                longerStringIndex += 2;
                oneCharacterDifferent = true;
            }
        } else {
            longerStringIndex++;
        }
    }
    if (shorterStringIndex === longerStringIndex && oneCharacterDifferent) {
        return false;
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
        if (inputOneCurrentCharacter !== inputTwoCurrentCharacter) {
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
        if (!_areInputsTheSameExceptForAnExtraCharacter(inputOne, inputTwo)) {
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
