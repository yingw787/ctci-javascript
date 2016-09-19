/*
    You are given two 32-bit numbers, N and M, and two bit positions, i and j. Write a method to insert M into N such that M starts at bit j and ends at bit i. You can assume that the bits j through i have enough space to fit all of M. That is, if M = 10011, you can assume that there are at least 5 bts between j and i. You would not, for example, have j=3 and i=2, because M could not fully fit betwen bit 3 and bit 2.
*/
'use strict';

const assert = require('assert');

function _clearBit(number, i) {
    const mask = ~(1 << i);
    return (number & mask).toString(2);
}

function _clearBits(toBeClearedNumber, i, j) {
    let number = toBeClearedNumber;
    for (let clearedBitIndex = i; clearedBitIndex <= j; clearedBitIndex++) {
        number = _clearBit(parseInt(number, 2), clearedBitIndex);
    }
    return number.toString(2);
}

module.exports = {
    chapterFiveProblemOneBruteForceSolution: (N, M, i, j) => {
        assert(typeof N === 'string');
        assert(typeof M === 'string');
        assert(typeof i === 'number');
        assert(typeof j === 'number');

        let parsedN = _clearBits(N, i, j);
        let result = (parseInt(parsedN, 2) | (parseInt(M, 2) << i)).toString(2);

        if (result.length < N.length) {
            const difference = N.length - result.length;
            for (let count = 0; count < difference; count++) {
                result = '0' + result;
            }
        }
        return result;
    },
};
