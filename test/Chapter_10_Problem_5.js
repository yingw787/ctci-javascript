const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_5 = require('../CTCI_5/Chapter_10_Sorting_And_Searching/Problem_5');

describe('chapterTenProblemFiveBruteForceSolution', function() {
    it('should throw error when given wrong type', function() {
        const sortedListy = 5;
        const value = 6;
        expect(function() {
            Problem_5.chapterTenProblemFiveBruteForceSolution(sortedListy, value);
        }).to.throw(Error);
    });
    it("should return 4 from ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''], 'ball'", function() {
        const sortedArrayOfStrings = ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''];
        const value = 'ball';
        const indexOfValue = Problem_5.chapterTenProblemFiveBruteForceSolution(sortedArrayOfStrings, value);
        assert.equal(indexOfValue, 4);
    });
});

describe('chapterTenProblemFiveImprovedSolution', function() {
    it('should throw error when given wrong type', function() {
        const sortedListy = 5;
        const value = 6;
        expect(function() {
            Problem_5.chapterTenProblemFiveImprovedSolution(sortedListy, value);
        }).to.throw(Error);
    });
    it("should return 4 from ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''], 'ball'", function() {
        const sortedArrayOfStrings = ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''];
        const value = 'ball';
        const indexOfValue = Problem_5.chapterTenProblemFiveImprovedSolution(sortedArrayOfStrings, value);
        assert.equal(indexOfValue, 4);
    });
});
