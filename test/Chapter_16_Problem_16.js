const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_16 = require('../CTCI_5/Chapter_16_Moderate/Problem_16');

describe('chapterSixteenProblemSixteenBruteForceSolution', function() {
    it('should throw an error upon incorrect type for inputs', function() {
        const arrayOfIntegersOne = 5.4;
        expect(function() {
            Problem_16.chapterSixteenProblemSixteenBruteForceSolution(arrayOfIntegersOne);
        }).to.throw(Error);
    });
    it('returns [0, 0] for an array with one element', function() {
        const arrayOfIntegersOne = [3];
        assert.equal(JSON.stringify(Problem_16.chapterSixteenProblemSixteenBruteForceSolution(arrayOfIntegersOne)), JSON.stringify([0, 0]));
    });
    it('returns [3, 9] for [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]', function() {
        const arrayOfIntegersOne = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];
        assert.equal(JSON.stringify(Problem_16.chapterSixteenProblemSixteenBruteForceSolution(arrayOfIntegersOne)), JSON.stringify([3, 9]));
    });
});
