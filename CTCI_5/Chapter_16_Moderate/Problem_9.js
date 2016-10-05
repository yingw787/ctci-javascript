/*
  Write methods to implement the multiply, subtract, and divide operations for integers. THe results of all of these are integers. Use only the add operator.
*/
'use strict';

const assert = require('assert');

// O(k) time, k = number
// O(1) space
function _negate(number) {
    let negatedNumber = 0;
    const newSign = (number < 0) ? 1 : -1;
    while (number !== 0) {
        negatedNumber = negatedNumber + newSign;
        number = number + newSign;
    }
    return negatedNumber;
}

// O(k) time, k = Math.max(a, b)
// O(1) space
function multiply(a, b) {
    assert(typeof a === 'number' && typeof b === 'number');
    if (a % 1 !== 0 || b % 1 !== 0) {
        throw new Error('a and b must be integers.');
    }
    let i = 0;
    let sum = 0;
    const isNegative = a < 0 ^ b < 0;
    if (isNegative) {
        const negative = (a < 0) ? a : b;
        const notNegative = (a === negative) ? b : a;
        while (i < notNegative) {
            sum = sum + negative;
            i = i + 1;
        }
    } else {
        const positiveA = (a < 0) ? _negate(a) : a;
        const positiveB = (b < 0) ? _negate(b) : b;
        while (i < positiveA) {
            sum = sum + positiveB;
            i = i + 1;
        }
    }
    return sum;
}

// O(k) time, k = b
// O(1) space
function subtract(a, b) {
    assert(typeof a === 'number' && typeof b === 'number');
    if (a % 1 !== 0 || b % 1 !== 0) {
        throw new Error('a and b must be integers.');
    }
    return a + _negate(b);
}

// O(k) time, k = Math.max(a, b)
// O(1) space
function divide(a, b) {
    assert(typeof a === 'number' && typeof b === 'number');
    if (a % 1 !== 0 || b % 1 !== 0) {
        throw new Error('a and b must be integers.');
    }
    if (b > a) {
        return 0;
    }
    const isNegative = a < 0 ^ b < 0;
    let quotient = 0;
    let positiveA = (a < 0) ? _negate(a) : a;
    const negativeB = (b < 0) ? b : _negate(b);
    if (isNegative) {
        while (positiveA > 0) {
            positiveA = positiveA + negativeB;
            quotient = quotient + -1;
        }
    }
    else {
        while (positiveA > 0) {
            positiveA = positiveA + negativeB;
            quotient = quotient + 1;
        }
    }
    return quotient;
}

module.exports = {
    multiply: multiply,
    subtract: subtract,
    divide: divide,
};
