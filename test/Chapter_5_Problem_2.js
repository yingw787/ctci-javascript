const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_2 = require('../CTCI_5/Chapter_5_Bit_Manipulation/Problem_2');

describe('chapterFiveProblemTwoImprovedSolution', function() {
    it('should catch invalid types', function() {
        const value = 'Hello';

        expect(function() {
            Problem_2.chapterFiveProblemTwoImprovedSolution(value);
        }).to.throw(Error);
    });
    it('should catch out of bounds numbers', function() {
        const value = 5;

        expect(function() {
            Problem_2.chapterFiveProblemTwoImprovedSolution(value);
        }).to.throw(Error);
    });
    it('should return "ERROR" string for values that cannot be represented in 32 bits', function() {
        const value = Math.PI / 3.5;
        assert.equal(Problem_2.chapterFiveProblemTwoImprovedSolution(value), 'ERROR');
    });
    it('should return 0.11 for 0.75', function() {
        const value = 0.75;
        assert.equal(Problem_2.chapterFiveProblemTwoImprovedSolution(value), '0.11');
    });
});
