/*
    A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.
*/
'use strict';

const assert = require('assert');

function chapterEightProblemOneBruteForceSolution(n) {
    assert(typeof n === 'number');
    if (n % 1 !== 0) {
        throw new Error('n must be an integer.');
    }
    if (n < 0) {
        throw new Error('n must be greater than or equal to zero.');
    }
    return recursivelyClimbStairs(n, 0, 0);
}

// O(3^N) time
// O(1) space
// REDO WITH O(N) time
function recursivelyClimbStairs(n, numberOfStepsClimbedSoFar, numberOfWaysToClimbStairs) {
    if (numberOfStepsClimbedSoFar > n) {
        return numberOfWaysToClimbStairs;
    }
    if (numberOfStepsClimbedSoFar === n) {
        return numberOfWaysToClimbStairs + 1;
    }
    return recursivelyClimbStairs(n, numberOfStepsClimbedSoFar + 1, numberOfWaysToClimbStairs + 1) +
        recursivelyClimbStairs(n, numberOfStepsClimbedSoFar + 2, numberOfWaysToClimbStairs + 1) +
        recursivelyClimbStairs(n, numberOfStepsClimbedSoFar + 3, numberOfWaysToClimbStairs + 1);
}

module.exports = {
    chapterEightProblemOneBruteForceSolution: chapterEightProblemOneBruteForceSolution,
};
