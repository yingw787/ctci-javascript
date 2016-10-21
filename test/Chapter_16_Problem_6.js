const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_6 = require('../CTCI_5/Chapter_16_Moderate/Problem_6');

describe('chapterSixteenProblemSixBruteForceSolution', function() {
    it('should throw error when given wrong type', function() {
        const arrayOfIntegersOne = 5;
        const arrayOfIntegersTwo = 'hi';
        expect(function() {
            Problem_6.chapterSixteenProblemSixBruteForceSolution(arrayOfIntegersOne, arrayOfIntegersTwo);
        }).to.throw(Error);
    });
    it('should return 0 for [1, 5, 8, 9, 10, 14, 89] and [89, 2, 7, 11, 12, 78]', function() {
        const arrayOfIntegersOne = [1, 5, 8, 9, 10, 14, 89];
        const arrayOfIntegersTwo = [89, 2, 7, 11, 12, 78];
        assert.equal(Problem_6.chapterSixteenProblemSixBruteForceSolution(arrayOfIntegersOne, arrayOfIntegersTwo), 0);
    });
});

describe('chapterSixteenProblemSixBookSolution', function() {
    it('should throw error when given wrong type', function() {
        const arrayOfIntegersOne = 5;
        const arrayOfIntegersTwo = 'hi';
        expect(function() {
            Problem_6.chapterSixteenProblemSixBookSolution(arrayOfIntegersOne, arrayOfIntegersTwo);
        }).to.throw(Error);
    });
    it('should return 0 for [1, 5, 8, 9, 10, 14, 89] and [89, 2, 7, 11, 12, 78]', function() {
        const arrayOfIntegersOne = [1, 5, 8, 9, 10, 14, 89];
        const arrayOfIntegersTwo = [89, 2, 7, 11, 12, 78];
        assert.equal(Problem_6.chapterSixteenProblemSixBookSolution(arrayOfIntegersOne, arrayOfIntegersTwo), 0);
    });
});
