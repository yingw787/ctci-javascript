/*
    Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
*/
'use strict';

const _setRowToZeroes = (matrix, i) => {
    for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0;
    }
};

const _setColumnToZeroes = (matrix, j) => {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][j] = 0;
    }
};

module.exports = {
    chapterOneProblemEightBruteForceSolution: matrix => {
        const n = matrix.length;
        const m = matrix[0].length;

        const zeroes = [];

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (matrix[i][j] === 0) {
                    zeroes.push([i, j]);
                }
            }
        }

        for (let i = 0; i < zeroes.length; i++) {
            _setRowToZeroes(matrix, zeroes[i][0]);
            _setColumnToZeroes(matrix, zeroes[i][1]);
        }
    },
};
