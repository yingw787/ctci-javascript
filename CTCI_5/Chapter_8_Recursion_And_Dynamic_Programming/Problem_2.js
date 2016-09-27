/*
    Imagine a robot sitting in the upper left corner of grid with r rows and c columns. The robot can only move in two directions, right and down, but certain cells are 'off limits' such that the robot canot step on them. Design an algorithm to find a path for the robot from the top left to the bottom right.
*/
'use strict';

const assert = require('assert');

function chapterEightProblemTwoBruteForceSolution(grid, offLimitsCells) {
    assert(typeof grid === 'object');
    assert(typeof offLimitsCells === 'object');
    if (grid.length === 0 || grid[0].length === 0) {
        throw new Error('invalid grid. Must have x and y greater than 0 in order to establish path.');
    }
    // assume given proper M * N matrix as object, and subarray lengths are consistent.
    const numberOfRows = grid.length;
    const numberOfColumns = grid[0].length;

    return recursivelyNavigateGrid(grid, offLimitsCells, numberOfRows, numberOfColumns, 0, 0, []);
}

// O(2^(R + C)) time
// O(R + C) space
// REDO, FIND O(R * C) time algorithm
function recursivelyNavigateGrid(grid, offLimitsCells, numberOfRows, numberOfColumns, currentXPosition, currentYPosition, path) {
    if (currentXPosition === numberOfColumns || currentXPosition < 0) {
        return null;
    }
    if (currentYPosition === numberOfRows || currentYPosition < 0) {
        return null;
    }
    if (offLimitsCells.indexOf(grid[currentYPosition][currentXPosition]) !== -1) {
        return null;
    }
    if (currentXPosition === numberOfColumns - 1 && currentYPosition === numberOfRows - 1) {
        path.push([currentXPosition, currentYPosition]);
        return path;
    }
    grid[currentYPosition][currentXPosition] = offLimitsCells[0];
    path.push([currentXPosition, currentYPosition]);
    return recursivelyNavigateGrid(grid, offLimitsCells, numberOfRows, numberOfColumns, currentXPosition + 1, currentYPosition, path) ||
     recursivelyNavigateGrid(grid, offLimitsCells, numberOfRows, numberOfColumns, currentXPosition, currentYPosition + 1, path);
}

module.exports = {
    chapterEightProblemTwoBruteForceSolution: chapterEightProblemTwoBruteForceSolution,
};
