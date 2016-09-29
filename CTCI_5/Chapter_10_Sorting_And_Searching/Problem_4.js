/*
    You are given an array-like data structure Listy which lacks a size method. It does, however, have an elementAt(i) method that returns the element at index i in O(1) time. If i is beyond the bounds of the data structure, it returns -1. (For this reason, the data structure only supports positive integers). Given a Listy which contains sorted, positive integers, find the index at which an element x occurs. If x occurs multiple times, you may return any index.
*/
'use strict';

const assert = require('assert');

// O(N) time
// O(1) space
// REDO O(log N) time, O(1) space
function chapterTenProblemFourBruteForceSolution(listyOfSortedPositiveIntegers, value) {
    assert(typeof listyOfSortedPositiveIntegers === 'object');
    assert(typeof value === 'number');
    let i = 0;
    while (listyOfSortedPositiveIntegers[i] !== -1 && listyOfSortedPositiveIntegers[i] !== value) {
        i++;
    }
    return i;
}

module.exports = {
    chapterTenProblemFourBruteForceSolution: chapterTenProblemFourBruteForceSolution,
};
