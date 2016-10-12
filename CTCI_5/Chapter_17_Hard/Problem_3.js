/*
    Write a method to randomly generate a set of m integers from an array of size n. Each element must have equal probability of being chosen.
*/
'use strict';

const assert = require('assert');

// O(?) time (worst-case never finish)
// O(M + N) space
// REDO WITH DEFINITIVE TIME
function chapterSeventeenProblemTwoBruteForceSolution(arrayOfIntegers, m) {
    assert(typeof arrayOfIntegers === 'object');
    for (let i = 0; i < arrayOfIntegers.length; i++) {
        assert(typeof arrayOfIntegers[i] === 'number' && arrayOfIntegers[i] % 1 === 0);
    }
    assert(typeof m === 'number' && m % 1 === 0);
    if (!_checkMUniqueValuesExist(arrayOfIntegers, m)) {
        return null;
    }

    const resultSet = [];
    while (resultSet.length < m) {
        const randomValue = arrayOfIntegers[Math.floor(Math.random() * arrayOfIntegers.length)];
        if (resultSet.indexOf(randomValue) === -1) {
            resultSet.push(randomValue);
        }
    }
    return resultSet;
}

function _checkMUniqueValuesExist(arrayOfIntegers, m) {
    const set = [];
    for (let i = 0; i < arrayOfIntegers.length; i++) {
        if (set.indexOf(arrayOfIntegers[i]) === -1) {
            set.push(arrayOfIntegers[i]);
        }
    }
    return set.length >= m;
}

module.exports = {
    chapterSeventeenProblemTwoBruteForceSolution: chapterSeventeenProblemTwoBruteForceSolution,
};
