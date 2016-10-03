const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_4 = require('../CTCI_5/Chapter_10_Sorting_And_Searching/Problem_4');

describe('chapterTenProblemFourBruteForceSolution', function() {
    it('should throw error when given wrong type', function() {
        const sortedListy = 5;
        expect(function() {
            Problem_4.chapterTenProblemFourBruteForceSolution(sortedListy, 0);
        }).to.throw(Error);
    });
    it('should return 5 from [1, 2, 3, 4, 5, 6, 7], 6', function() {
        const sortedListy = [1, 2, 3, 4, 5, 6, 7];
        const indexOfValue = Problem_4.chapterTenProblemFourBruteForceSolution(sortedListy, 6);
        assert.equal(indexOfValue, 5);
    });
});

describe('chapterTenProblemFourImprovedSolution', function() {
    it('should throw error when given wrong type', function() {
        const sortedListy = 5;
        expect(function() {
            Problem_4.chapterTenProblemFourImprovedSolution(sortedListy, 0);
        }).to.throw(Error);
    });
    it('should return 5 from [1, 2, 3, 4, 5, 6, 7], 6', function() {
        const sortedListy = [1, 2, 3, 4, 5, 6, 7];
        const indexOfValue = Problem_4.chapterTenProblemFourImprovedSolution(sortedListy, 6);
        assert.equal(indexOfValue, 5);
    });
});
