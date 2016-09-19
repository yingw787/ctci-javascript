/*
    You have an integer and you can flip exactly one bit from a 0 to a 1. Write code to find the length of the longest sequence of 1s you could create.
*/
'use strict';

const assert = require('assert');

function _checkStringForInvalidInput(binaryString) {
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString.charAt(i) !== '0' && binaryString.charAt(i) !== '1') {
            throw new Error('invalid binary string.');
        }
    }
}

module.exports = {
    chapterFiveProblemThreeBruteForceSolution: binaryString => {
        assert(typeof binaryString === 'string');

        _checkStringForInvalidInput(binaryString);

        const lengths = [];
        for (let i = 0; i < binaryString.length; i++) {
            let possibleNumberOfOnes = 0;
            let onlyOneZero = true;
            for (let j = i; j < binaryString.length; j++) {
                if (binaryString.charAt(j) === '0' && !onlyOneZero) {
                    lengths.push(possibleNumberOfOnes);
                    break;
                } else if (binaryString.charAt(j) === '0' && onlyOneZero) {
                    onlyOneZero = false;
                }
                possibleNumberOfOnes += 1;
                if (j === binaryString.length - 1) {
                    lengths.push(possibleNumberOfOnes);
                }
            }
        }

        return Math.max.apply(null, lengths);
    },
    // REDO PROBLEM THIS IS BRUTE FORCE
};
