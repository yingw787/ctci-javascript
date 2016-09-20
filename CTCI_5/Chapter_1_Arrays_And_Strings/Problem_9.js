/*
    Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one cal to isSubstring (e.g. "waterbottle" is a rotation of "erbottlewat").
*/
'use strict';

// assume indexOf is isSubstring method.

const assert = require('assert');

module.exports = {
    chapterOneProblemNineBruteForceSolution: (inputOne, inputTwo) => {
        assert(typeof inputOne === 'string');
        assert(typeof inputTwo === 'string');

        const doubleString = inputOne + inputOne;
        return doubleString.indexOf(inputTwo) !== -1;
    },
};
