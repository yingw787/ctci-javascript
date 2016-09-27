const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_4 = require('../CTCI_5/Chapter_8_Recursion_And_Dynamic_Programming/Problem_4');

describe('chapterEightProblemFourBruteForceSolution', function() {
    it('should throw error when given wrong type', function() {
        const set = 5;
        expect(function() {
            Problem_4.chapterEightProblemFourBruteForceSolution(set);
        }).to.throw(Error);
    });
    it('should return set when given empty set or set with one element', function() {
        const set = [];
        assert.equal(JSON.stringify(Problem_4.chapterEightProblemFourBruteForceSolution(set)), JSON.stringify([]));

        const anotherSet = [5];
        assert.equal(JSON.stringify(Problem_4.chapterEightProblemFourBruteForceSolution(anotherSet)), JSON.stringify([5]));
    });
    it('should return [1], [2], [3], [1, 2], [1, 3], [2, 3] for a set [1, 2, 3]', function() {
        const set = [1, 2, 3];
        const arrayOfSubsets = Problem_4.chapterEightProblemFourBruteForceSolution(set);
        assert.equal(JSON.stringify(arrayOfSubsets), '[[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]');
    });
});
