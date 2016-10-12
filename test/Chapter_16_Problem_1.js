const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_1 = require('../CTCI_5/Chapter_16_Moderate/Problem_1');

describe('chapterSixteenProblemOneBruteForceSolution', function() {
    it('should throw error when given wrong type', function() {
        const numberOne = 5;
        const numberTwo = 'hi';
        expect(function() {
            Problem_1.chapterSixteenProblemOneBruteForceSolution(numberOne, numberTwo);
        }).to.throw(Error);
    });
    it('should swap values', function() {
        const numberOne = 3;
        const numberTwo = 1;
        assert.equal(Problem_1.chapterSixteenProblemOneBruteForceSolution(numberOne, numberTwo).numberOne, 1);
        assert.equal(Problem_1.chapterSixteenProblemOneBruteForceSolution(numberOne, numberTwo).numberTwo, 3);
    });
});
