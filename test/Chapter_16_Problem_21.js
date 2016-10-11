const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_21 = require('../CTCI_5/Chapter_16_Moderate/Problem_21');

describe('chapterSixteenProblemTwentyOneBruteForceSolution', function() {
    it('should throw an error upon incorrect type for inputs', function() {
        const arrayOfIntegersOne = 'hi';
        const arrayOfIntegersTwo = 5;
        expect(function() {
            Problem_21.chapterSixteenProblemTwentyOneBruteForceSolution(arrayOfIntegersOne, arrayOfIntegersTwo);
        }).to.throw(Error);
    });
    it('should return [1, 3] for [4, 1, 2, 1, 1, 2] and [3, 6, 3, 3]', function() {
        const arrayOfIntegersOne = [4, 1, 2, 1, 1, 2];
        const arrayOfIntegersTwo = [3, 6, 3, 3];
        assert.equal(JSON.stringify(Problem_21.chapterSixteenProblemTwentyOneBruteForceSolution(arrayOfIntegersOne, arrayOfIntegersTwo)), JSON.stringify([4, 6]));

        const arrayOfIntegersThree = [3, 6, 3, 3];
        const arrayOfIntegersFour = [4, 1, 2, 1, 1, 2];
        assert.equal(JSON.stringify(Problem_21.chapterSixteenProblemTwentyOneBruteForceSolution(arrayOfIntegersThree, arrayOfIntegersFour)), JSON.stringify([3, 1]));
    });
});
