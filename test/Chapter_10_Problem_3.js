const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_3 = require('../CTCI_5/Chapter_10_Sorting_And_Searching/Problem_3');

describe('chapterTenProblemThreeBruteForceSolution', function() {
    it('should throw error when given wrong type', function() {
        const sortedArrayA_1 = 5;
        expect(function() {
            Problem_3.chapterTenProblemThreeBruteForceSolution(sortedArrayA_1);
        }).to.throw(Error);
    });
    it('should return 8 from [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14]', function() {
        const sortedArrayA_1 = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];
        const indexOfValue = Problem_3.chapterTenProblemThreeBruteForceSolution(sortedArrayA_1, 5);
        assert.equal(indexOfValue, 8);
    });
});
