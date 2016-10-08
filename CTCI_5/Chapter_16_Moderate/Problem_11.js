/*
    You are building a diving board by placing a bunch of planks of wood end-to-end. There are two types of planks, one of length shorter and one of length longer. You must use exactly K planks of wood. Write a method to generate all possible lengths of the diving board.
*/
'use strict';

const assert = require('assert');

// REDO
// O(2 ^ N) time, N = K
// O(2 ^ N) time, N = K
function chapterSixteenProblemElevenBookSolutionOne(shorterPlankLength, longerPlankLength, K) {
    assert(typeof shorterPlankLength === 'number' && typeof longerPlankLength === 'number');
    assert(typeof K === 'number' && K % 1 === 0);

    const lengths = [];
    _getAllLengths(K, 0, shorterPlankLength, longerPlankLength, lengths);
    const result = _removeDuplicates(lengths);
    return result;
}

function _removeDuplicates(lengths) {
    return lengths.filter(function(item, pos) {
        return lengths.indexOf(item) === pos;
    });
}

function _getAllLengths(k, total, shorterPlankLength, longerPlankLength, lengths) {
    if (k === 0) {
        lengths.push(total);
        return lengths;
    }
    return _getAllLengths(k - 1, total + shorterPlankLength, shorterPlankLength, longerPlankLength, lengths).concat(_getAllLengths(k - 1, total + longerPlankLength, shorterPlankLength, longerPlankLength, lengths));
}

module.exports = {
    chapterSixteenProblemElevenBookSolutionOne: chapterSixteenProblemElevenBookSolutionOne,
};
