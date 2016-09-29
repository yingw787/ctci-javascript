/*
    Write a method to sort an array of strings so that all the anagrams are next to each other.
*/
'use strict';

const assert = require('assert');

class AnagramComparator {
    sortCharactersInString(string) {
        return string.split('').sort().join();
    }
    compare(inputOne, inputTwo) {
        assert(typeof inputOne === 'string');
        assert(typeof inputTwo === 'string');
        return this.sortCharactersInString(inputOne).localeCompare(this.sortCharactersInString(inputTwo));
    }
}

// O(N log N) time
// O(N) space
// REDO by grouping, instead of sorting everything
function chapterTenProblemTwoBruteForceSolution(arrayOfStrings) {
    assert(typeof arrayOfStrings === 'object');
    return arrayOfStrings.sort(function(inputOne, inputTwo) {
        return new AnagramComparator().compare(inputOne, inputTwo);
    });
}

module.exports = {
    chapterTenProblemTwoBruteForceSolution: chapterTenProblemTwoBruteForceSolution,
};
