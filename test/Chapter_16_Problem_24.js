const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_24 = require('../CTCI_5/Chapter_16_Moderate/Problem_24');

describe('chapterSixteenProblemTwentyFourBruteForceSolution', function() {
    it('should throw an error upon incorrect type for inputs', function() {
        const arrayOfIntegersOne = 'hi';
        const valueOne = 3;
        expect(function() {
            Problem_24.chapterSixteenProblemTwentyFourBruteForceSolution(arrayOfIntegersOne, valueOne);
        }).to.throw(Error);

        const arrayOfIntegersTwo = [5, 4, 8.9, 10];
        const valueTwo = 4;
        expect(function() {
            Problem_24.chapterSixteenProblemTwentyFourBruteForceSolution(arrayOfIntegersTwo, valueTwo);
        }).to.throw(Error);

        const arrayOfIntegersThree = [5, 4, 9, 10];
        const valueThree = 9.8;
        expect(function() {
            Problem_24.chapterSixteenProblemTwentyFourBruteForceSolution(arrayOfIntegersThree, valueThree);
        }).to.throw(Error);

        const arrayOfIntegersFour = [5, 4, 9, 10];
        const valueFour = 'hi';
        expect(function() {
            Problem_24.chapterSixteenProblemTwentyFourBruteForceSolution(arrayOfIntegersFour, valueFour);
        }).to.throw(Error);
    });
    it('should throw an error upon array of length one', function() {
        const arrayOfIntegersOne = [5];
        const valueOne = 5;
        expect(function() {
            Problem_24.chapterSixteenProblemTwentyFourBruteForceSolution(arrayOfIntegersOne, valueOne);
        }).to.throw(Error);
    });
    it('should return all pairs of integers including duplicates from duplicate values in the array, that sum to a particular value', function() {
        const arrayOfIntegersOne = [1, 6, 4, 3, 2, 1];
        const valueOne = 5;
        assert.equal(JSON.stringify(Problem_24.chapterSixteenProblemTwentyFourBruteForceSolution(arrayOfIntegersOne, valueOne)), JSON.stringify([[1, 4], [4, 1], [3, 2]]));
    });
});
