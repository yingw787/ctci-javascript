/*
    There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
*/
'use strict';

const _checkCharactersAreTheSameExceptOneExtra = (stringOne, stringTwo) => {
    let shorterString, longerString;
    if (stringOne.length > stringTwo.length) {
        longerString = stringOne;
        shorterString = stringTwo;
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
};

const _checkStringsAreTheSameExceptOneDifferentCharacter = (stringOne, stringTwo) => {
    let oneDifferent = false;
    for (let i = 0; i < stringOne.length; i++) {
        const stringOneCurrentCharacter = stringOne.charAt(i);
        const stringTwoCurrentCharacter = stringTwo.charAt(i);
        if (JSON.stringify(stringOneCurrentCharacter) !== JSON.stringify(stringTwoCurrentCharacter)) {
            if (oneDifferent) {
                return false;
            } else {
                oneDifferent = true;
            }
        }
    }
    return true;
};

module.exports = {
    // O(N) time
    // O(N) space
    chapterOneProblemFiveBruteForceSolution: (stringOne, stringTwo) => {
        if (stringOne.length !== stringTwo.length) {
            if (Math.abs(stringOne.length - stringTwo.length) > 1) {
                return false;
            }
            if (!_checkCharactersAreTheSameExceptOneExtra(stringOne, stringTwo)) {
                return false;
            }
        } else {
            if (!_checkStringsAreTheSameExceptOneDifferentCharacter(stringOne, stringTwo)) {
                return false;
            }
        }
        return true;
    },
};
