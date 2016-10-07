/*
    Given any integer, print an English phrase that describes the integer (e.g., "One Thousand, Two Hundred Thirty Four");
*/
'use strict';

const assert = require('assert');

const smalls = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const tens = ['', '', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const bigs = ['', 'Thousand', 'Million', 'Billion'];
const hundred = 'Hundred';
const negative = 'Negative';

function chapterSixteenProblemEightBookSolution(integerValue) {
    assert(typeof integerValue === 'number' && integerValue % 1 === 0);
    return _convert(integerValue);
}

function _convert(number) {
    if (number === 0) {
        return smalls[0];
    } else if (number < 0) {
        return negative + ' ' + _convert(-1 * number);
    }

    const parts = [];
    let chunkCount = 0;

    while (number > 0) {
        if (number % 1000 !== 0) {
            const chunk = _convertChunk(number % 1000) + ' ' + bigs[chunkCount];
            parts.unshift(chunk);
        }
        number = Math.floor(number / 1000);
        chunkCount++;
    }

    return _listToString(parts).trim();
}

function _convertChunk(number) {
    const parts = [];

    if (number >= 100) {
        parts.push(smalls[Math.floor(number / 100)]);
        parts.push(hundred);
        number %= 100;
    }

    if (number >= 10 && number <= 19) {
        parts.push(smalls[number]);
    } else {
        parts.push(tens[Math.floor(number / 10)]);
        number %= 10;
    }

    if (number >= 1 && number <= 9) {
        parts.push(smalls[number]);
    }

    return _listToString(parts);
}

function _listToString(parts) {
    return parts.join(' ');
}

module.exports = {
    chapterSixteenProblemEightBookSolution: chapterSixteenProblemEightBookSolution,
};
