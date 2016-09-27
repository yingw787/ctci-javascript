/*
    Write a method to return all subsets of a set.
*/
'use strict';

const assert = require('assert');

function _removeDuplicates(set) {
    var seen = {};
    const newSet = set.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
    return newSet.sort(function(a, b) {
        if (a.length < b.length) {
            return -1;
        } else if (b.length < a.length) {
            return 1;
        } else if (_sumValuesInArray(a) < _sumValuesInArray(b)) {
            return -1;
        } else if (_sumValuesInArray(b) < _sumValuesInArray(a)) {
            return 1;
        }
        return 0;
    });
}

function _sumValuesInArray(array) {
    return array.reduce(function(a, b) {
        return a + b;
    }, 0);
}

function chapterEightProblemFourBruteForceSolution(set) {
    assert(typeof set === 'object');
    if (set.length <= 1) {
        return set;
    }

    let arrayOfSubsets = recursivelyDetermineSubsets(set, []);
    return _removeDuplicates(arrayOfSubsets);
}

function _searchForArray(arrayOfArrays, array) {
    for (let i = 0; i < arrayOfArrays.length; i++) {
        if (arrayOfArrays[i].length === array.length) {
            const currentArray = arrayOfArrays[i];
            for (let j = 0; j < currentArray.length && currentArray[j] === array[j]; ++j) {
                if (j === array.length) {
                    return i;
                }
            }
        }
    }
    return -1;
}

// O(2 ^ N) time (TODO: DOUBLE CHECK THIS)
// O(2 ^ N) space (TODO: DOUBLE CHECK THIS)
// REDO WITHOUT REMOVE DUPLICATES FUNCTION
function recursivelyDetermineSubsets(set, arrayOfSubsets) {
    if (set.length === 1) {
        arrayOfSubsets.push(set);
        return null;
    }
    if (_searchForArray(arrayOfSubsets, set) !== -1) {
        return null;
    }
    arrayOfSubsets.push(set);
    for (let i = 0; i < set.length; i++) {
        const newSet = set.slice();
        newSet.splice(i, 1);
        recursivelyDetermineSubsets(newSet, arrayOfSubsets);
    }

    return arrayOfSubsets;
}

module.exports = {
    chapterEightProblemFourBruteForceSolution: chapterEightProblemFourBruteForceSolution,
};
