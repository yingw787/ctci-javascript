const chai = require('chai');
const assert = chai.assert;

const Problem_8 = require('../CTCI_5/Chapter_1_Arrays_And_Strings/Problem_8');

const matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 0],
    [11, 12, 13, 14, 15],
    [0, 17, 18, 19, 20],
];

const processedMatrix = [
    [0, 2, 3, 4, 0],
    [0, 0, 0, 0, 0],
    [0, 12, 13, 14, 0],
    [0, 0, 0, 0, 0],
];

describe('chapterOneProblemEightBruteForceSolution', function() {
    it('should give correct value here', function() {
        Problem_8.chapterOneProblemEightBruteForceSolution(matrix);
        assert.equal(JSON.stringify(matrix), JSON.stringify(processedMatrix));
    });
});
