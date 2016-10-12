/*
    Implement a method rand7() given rand5(). That is, given a method that generates a random number between 0 and 4 (randomized), write a method that generates a random number between 0 and 6.
*/
'use strict';

// O(1) time
// O(1) space
// CORRECT NO REDO
function chapterSixteenProblemTwentyThreeBruteForceSolution() {
    return rand5() * (3 / 2);
}

function rand5() {
    return Math.random() * 4;
}

module.exports = {
    chapterSixteenProblemTwentyThreeBruteForceSolution: chapterSixteenProblemTwentyThreeBruteForceSolution,
};
