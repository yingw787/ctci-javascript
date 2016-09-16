/*
    Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one cal to isSubstring (e.g. "waterbottle" is a rotation of "erbottlewat").
*/
'use strict';

// assume indexOf is isSubstring method.

module.exports = {
    chapterOneProblemNineBruteForceSolution: (stringOne, stringTwo) => {
        const doubleString = stringOne + stringOne;
        return doubleString.indexOf(stringTwo) !== -1;
    },
};
