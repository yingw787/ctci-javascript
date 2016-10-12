/*
    An ant is sitting on an infinite grid of white and black squares. It initially faces right. At each step, it does the following:

    (1) At a white square, flip the color of the square, turn 90 degrees right (clockwise), and move forward one unit.
    (2) At a black square, flip the color of the square, turn 90 degrees left (counter-clockwise), and move forward one unit.

    Write a program to simulate the first K moves that the ant makes and print the final board as a grid. Note that you are not provided with the data structure to represent the grid. This is something you must design yourself. The only input to your method is K. You should print the final grid and return nothing. The method signature must be something like void printKMoves(int K).
*/
'use strict';

const assert = require('assert');

// TODO: REVIEW AND WRITE CODE
function chapterSixteenProblemTwentyTwoBruteForceSolution(K) {
    assert(typeof K === 'number' && K % 1 === 0);

    // QUESTION: HOW ARE THE WHITE AND BLACK SQUARES INITIALLY ARRANGED? RANDOMIZED? CHECKERED? STRIPES? OTHER? HOW WOULD I DESIGN A GRID IF I DON'T HAVE ANY PATTERN TO FOLLOW?

    // CANNOT ANSWER QUESTION WITHOUT ANSWER TO ABOVE

    // GIVEN A PATTERN
    // ASSUMPTION: INFINITE GRID HAS NO BOUNDARIES. THERE IS NO POSITIVE OR NEGATIVE.
    // GENERATE A 3x3 GRID WITH THE ANT IN THE MIDDLE, FACING RIGHT.
    // WHEN THE ANT MOVES, ADD THE SQUARE TO AN ARRAY, WITH THE POSITION AND COLOR, AND UPDATE THE GRID SO THAT THE ANT IS IN THE CENTER.
    // RETURN THE EXPLORED GRID TO THE USER: FROM THE END OF THE ARRAY, BUILD OUT THE FINAL COLOR; IF THE ARRAY CONTAINS A SQUARE PREVIOUSLY VISITED, IGNORE IT
}

module.exports = {
    chapterSixteenProblemTwentyTwoBruteForceSolution: chapterSixteenProblemTwentyTwoBruteForceSolution,
};
