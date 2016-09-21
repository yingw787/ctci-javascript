/*
    Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/
'use strict';

const assert = require('assert');

// O(N) time, N being number of elements
// O(1) space, done in place
// CORRECT NO REDO
function chapterOneProblemSevenBruteForceSolution(grid) {
    assert(typeof grid === 'object');
    const n = grid.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = i; j < n - 1 - i; j++) {
            const leftTop = grid[i][j];
            const leftBottom = grid[n - 1 - j][i];
            const rightBottom = grid[n - 1 - i][n - 1 - j];
            const rightTop = grid[j][n - 1 - i];

            grid[i][j] = leftBottom;
            grid[n - 1 - j][i] = rightBottom;
            grid[n - 1 - i][n - 1 - j] = rightTop;
            grid[j][n - 1 - i] = leftTop;
        }
    }
}

module.exports = {
    chapterOneProblemSevenBruteForceSolution: chapterOneProblemSevenBruteForceSolution,
};
