/*
    Write a method that finds the maximum of two numbers. You should not use if-else or any other comparison operator.
*/
'use strict';

const assert = require('assert');

// O(1) time
// O(1) space
// REDO WRONG
function chapterSixteenProblemSevenBruteForceSolution(numberOne, numberTwo) {
    assert(typeof numberOne === 'number');
    assert(typeof numberTwo === 'number');

    const max = Math.sign(numberOne - numberTwo) > 0 ? 1 : 0;
    return (numberOne * max) + (numberTwo * !max);
}

// O(1) time
// O(1) space
// REDO WRONG
function chapterSixteenProblemSevenImprovedSolution(numberOne, numberTwo) {
    const k = _computeK(numberOne, numberTwo);
    return numberOne * parseInt(k, 10) + numberTwo * parseInt(k ^ 1, 10);
}

function _computeK(numberOne, numberTwo) {
    assert(typeof numberOne === 'number');
    assert(typeof numberTwo === 'number');

    const sign = _convertToFullLengthBinaryString(numberOne - numberTwo).charAt(0);
    return 1 ^ parseInt(sign, 2);
}

function _convertToFullLengthBinaryString(number) {
    let binaryString = (number >>> 0).toString(2);
    if (binaryString.length < 32) {
        binaryString = '0' + binaryString;
    }
    return binaryString;
}

// O(1) space
// O(1) space
// TODO: REVIEW
function chapterSixteenProblemSevenBookSolution(numberOne, numberTwo) {
    assert(typeof numberOne === 'number');
    assert(typeof numberTwo === 'number');

    const k = _sign(numberOne - numberTwo);
    const q = _flip(k);
    return numberOne * k + numberTwo * q;
}

function _sign(number) {
    return _flip(number >>> 31 & 0x1);
}

function _flip(number) {
    return 1 ^ number;
}

module.exports = {
    chapterSixteenProblemSevenBruteForceSolution: chapterSixteenProblemSevenBruteForceSolution,
    chapterSixteenProblemSevenImprovedSolution: chapterSixteenProblemSevenImprovedSolution,
    chapterSixteenProblemSevenBookSolution: chapterSixteenProblemSevenBookSolution,
};
