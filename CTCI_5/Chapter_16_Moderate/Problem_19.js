/*
    You have an integer matrix representing a plot of land, where the value at that location represents the height above sea level. A value of zero indicates water. A pond is a region of water connecting vertically, horizontally, or diagonally. The size of the pond is the total number of connected water wells. Write a method to compute the sizes of all ponds in the matrix.

    EXAMPLE

    Input:
    [
        [0, 2, 1, 0],
        [0, 1, 0, 1],
        [1, 1, 0, 1],
        [0, 1, 0, 1],
    ]
    Output: 2, 4, 1 (in any order)
*/
'use strict';

const assert = require('assert');

// TIMEOUT
// O(M * N) time, M = rows, N = cols
// O(M * N) space
// TODO: REVIEW
function chapterSixteenProblemNineteenBookSolution(plotOfLand) {
    assert(typeof plotOfLand === 'object');
    const height = plotOfLand.length;
    const width = plotOfLand[0].length;

    const pondSizes = [];
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (plotOfLand[row][col] === 0) {
                pondSizes.push(_computeSize(plotOfLand, row, col));
            }
        }
    }
    return pondSizes;
}

function _computeSize(plotOfLand, row, col) {
    if (row < 0 || col < 0 || row >= plotOfLand.length || col >= plotOfLand[row].length || plotOfLand[row][col] !== 0) {
        return 0;
    }
    let size = 1;
    plotOfLand[row][col] = -1;
    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            size += _computeSize(plotOfLand, row + dr, col + dc);
        }
    }
    return size;
}

module.exports = {
    chapterSixteenProblemNineteenBookSolution: chapterSixteenProblemNineteenBookSolution,
};
