const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_7 = require('../CTCI_5/Chapter_16_Moderate/Problem_7');

describe('chapterSixteenProblemSevenBruteForceSolution', function() {
    it('should throw error when given wrong type', function() {
        const numberOne = 5;
        const numberTwo = 'hi';
        expect(function() {
            Problem_7.chapterSixteenProblemSevenBruteForceSolution(numberOne, numberTwo);
        }).to.throw(Error);
    });
    it('should return 3 when numberOne = 3 and numberTwo = 1', function() {
        const numberOne = 3;
        const numberTwo = 1;
        assert.equal(Problem_7.chapterSixteenProblemSevenBruteForceSolution(numberOne, numberTwo), 3);
    });
});
