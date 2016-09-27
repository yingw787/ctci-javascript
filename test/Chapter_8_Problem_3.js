const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_3 = require('../CTCI_5/Chapter_8_Recursion_And_Dynamic_Programming/Problem_3');

describe('chapterEightProblemThreeBruteForceSolution', function() {
    it('should throw error when given wrong type', function() {
        const array = 5;
        expect(function() {
            Problem_3.chapterEightProblemThreeBruteForceSolution(array);
        }).to.throw(Error);
    });
    it('should return null when given empty array', function() {
        const array = [];
        assert.equal(Problem_3.chapterEightProblemThreeBruteForceSolution(array), null);
    });
    it('should return first magic index it encounters', function() {
        const array = [1, 2, 3, 4, 4, 5];
        assert.equal(Problem_3.chapterEightProblemThreeBruteForceSolution(array), 4);
    });
    it('should return null if magic index does not exist', function() {
        const array = [1, 2, 3, 4, 5];
        assert.equal(Problem_3.chapterEightProblemThreeBruteForceSolution(array), null);
    });
});

describe('chapterEightProblemThreeImprovedSolution', function() {
    it('should throw error when given wrong type', function() {
        const array = 5;
        expect(function() {
            Problem_3.chapterEightProblemThreeImprovedSolution(array);
        }).to.throw(Error);
    });
    it('should return null when given empty array', function() {
        const array = [];
        assert.equal(Problem_3.chapterEightProblemThreeImprovedSolution(array), null);
    });
    it('should return first magic index it encounters', function() {
        const array = [1, 2, 3, 4, 4, 5];
        assert.equal(Problem_3.chapterEightProblemThreeImprovedSolution(array), 4);
    });
    it('should return null if magic index does not exist', function() {
        const array = [1, 2, 3, 4, 5];
        assert.equal(Problem_3.chapterEightProblemThreeImprovedSolution(array), null);
    });
});
