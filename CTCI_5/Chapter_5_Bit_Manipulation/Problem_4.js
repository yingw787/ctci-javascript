/*
    Given a positive integer, print the next smallest and the next largest number that have the same number of 1 bits in their binary representation.
*/
'use strict';

const assert = require('assert');

function _countNumberOfOnes(binaryString) {
    let numberOfOnes = 0;
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString.charAt(i) === '1') {
            numberOfOnes += 1;
        }
    }
    return numberOfOnes;
}

function _calculateLargerValue(positiveInteger, desiredNumberOfOnes) {
    if (_countNumberOfOnes(positiveInteger.toString(2)) === desiredNumberOfOnes) {
        return positiveInteger;
    }
    return _calculateLargerValue(positiveInteger + 1, desiredNumberOfOnes);
}

function _calculateSmallerValue(positiveInteger, subtractor, desiredNumberOfOnes) {
    if (_countNumberOfOnes(positiveInteger.toString(2)) === desiredNumberOfOnes) {
        return positiveInteger;
    }
    if (positiveInteger === 0) {
        return null;
    }
    return _calculateSmallerValue(positiveInteger - subtractor, subtractor, desiredNumberOfOnes);
}

// O(?) time REVIEW O(N) FOR BIT MANIPULATION ALGORITHMS
// O(?) space
// REDO
function chapterFiveProblemFourBruteForceSolution(positiveInteger) {
    assert(typeof positiveInteger === 'number');

    if (positiveInteger <= 0) {
        throw new Error('positiveInteger not positive');
    }

    if (positiveInteger % 1 !== 0) {
        throw new Error('positiveInteger not an integer');
    }

    const positiveIntegerAsBinaryString = positiveInteger.toString(2);
    const positiveIntegerAsBinaryStringNumberOfOnes = _countNumberOfOnes(positiveIntegerAsBinaryString);

    let largerValueSameNumberOfOnes, smallerValueSameNumberOfOnes;

    largerValueSameNumberOfOnes = _calculateLargerValue(positiveInteger + 1, positiveIntegerAsBinaryStringNumberOfOnes);
    smallerValueSameNumberOfOnes = _calculateSmallerValue(positiveInteger - 1, 1, positiveIntegerAsBinaryStringNumberOfOnes);

    return [largerValueSameNumberOfOnes, smallerValueSameNumberOfOnes];
}

module.exports = {
    chapterFiveProblemFourBruteForceSolution: chapterFiveProblemFourBruteForceSolution,
};
